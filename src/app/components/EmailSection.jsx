"use client";
import Image from "next/image";
import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { socialLinks } from "../../lib/siteData";

const iconMap = {
  github: "/images/github-icon.svg",
  linkedin: "/images/linkedin-icon.svg",
  devto: "/images/devto.svg",
  blog: "/images/blog.svg",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SUBJECT_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2000;

const sanitizeText = (value) => value.replace(/[<>]/g, "").trim();

const EmailSection = () => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value.trim();
    const subject = sanitizeText(form.subject.value);
    const message = sanitizeText(form.message.value);

    if (!email || !subject || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields before sending.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (subject.length > MAX_SUBJECT_LENGTH) {
      setStatus("error");
      setErrorMessage(`Subject must be ${MAX_SUBJECT_LENGTH} characters or less.`);
      return;
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      setStatus("error");
      setErrorMessage(`Message must be ${MAX_MESSAGE_LENGTH} characters or less.`);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
        signal: controller.signal,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return (
    <section id="contact" className="relative grid gap-8 py-16 sm:py-20 lg:py-24 md:grid-cols-2">
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(245,158,61,0.16),_transparent_70%)] blur-2xl" />

      <div className="rounded-[24px] border border-[#F59E3D]/15 bg-[#121317]/80 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.24)] sm:p-8">
        <h5 className="mb-3 text-xl font-bold text-white">Let&apos;s connect</h5>
        <p className="mb-6 max-w-md text-slate-300">
          I&apos;m open to new opportunities, collaborations, and feedback on my work. Whether you
          have a project idea, want to share your thoughts, or just want to say hello, my inbox is
          always open—I&apos;ll do my best to respond promptly!
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || DocumentTextIcon;
            const isImageIcon = typeof Icon === "string";

            return (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#F59E3D]/20 bg-[#101014]/80 text-[#F59E3D] transition duration-250 hover:-translate-y-0.5 hover:border-[#F59E3D]/50 hover:bg-[#F59E3D]/10 hover:text-white"
              >
                {isImageIcon ? (
                  <Image
                    src={Icon}
                    alt={`${link.label} icon`}
                    width={20}
                    height={20}
                    className="opacity-90 transition duration-250 group-hover:opacity-100"
                  />
                ) : (
                  <Icon className="h-5 w-5 text-white" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="rounded-[24px] border border-[#F59E3D]/15 bg-[#121317]/80 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.24)] sm:p-8">
        {status === "success" ? (
          <div className="rounded-[20px] border border-green-500 bg-[#0f2113] p-6 text-green-400">
            <p className="font-semibold">Message sent successfully!</p>
            <p className="mt-2 text-sm text-[#A7F3D0]">I will get back to you shortly.</p>
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full rounded-[14px] border border-[#F59E3D]/20 bg-[#0f1115] p-3 text-sm text-gray-100 placeholder-[#9CA2A9] transition duration-250 focus:border-[#F59E3D]/60 focus:outline-none focus:ring-2 focus:ring-[#F59E3D]/20"
                placeholder="jacob@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full rounded-[14px] border border-[#F59E3D]/20 bg-[#0f1115] p-3 text-sm text-gray-100 placeholder-[#9CA2A9] transition duration-250 focus:border-[#F59E3D]/60 focus:outline-none focus:ring-2 focus:ring-[#F59E3D]/20"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="h-36 w-full rounded-[14px] border border-[#F59E3D]/20 bg-[#0f1115] p-3 text-sm text-gray-100 placeholder-[#9CA2A9] transition duration-250 focus:border-[#F59E3D]/60 focus:outline-none focus:ring-2 focus:ring-[#F59E3D]/20"
                placeholder="Let's talk about..."
              />
            </div>
            {status === "error" && (
              <p className="mb-4 text-sm text-red-400" aria-live="assertive">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-[14px] bg-[#F59E3D] px-5 py-3 text-[#111111] transition duration-250 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,158,61,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
