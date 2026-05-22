"use client";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import { useState } from "react";
import { socialLinks } from "../../lib/siteData";

const EmailSection = () => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      e.target.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative grid gap-4 py-24 md:grid-cols-2">
      <div className="absolute top-3/4 left-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent blur-lg" />

      <div className="z-10">
        <h5 className="mb-2 text-xl font-bold text-white">Let&apos;s connect</h5>
        <p className="mb-4 max-w-md text-[#ADB7BE]">
          I&apos;m open to new opportunities, collaborations, and feedback on my work. Whether you
          have a project idea, want to share your thoughts, or just want to say hello, my inbox is
          always open—I&apos;ll do my best to respond promptly!
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Image
                src={link.label === "GitHub" ? GithubIcon : LinkedinIcon}
                alt={`${link.label} Icon`}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="z-10">
        {status === "success" ? (
          <div className="rounded-3xl border border-green-500 bg-[#0f2113] p-6 text-green-400">
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
                className="w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
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
                className="w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
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
                className="h-36 w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
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
              className="w-full rounded-lg bg-primary-500 px-5 py-2.5 text-white transition hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
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
