"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CertificationCard = ({ title, issuer, date, src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#101216] shadow-2xl shadow-black/60"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Close certificate preview"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            <div className="p-4 text-center text-white">
              <p className="text-sm text-[#ADB7BE]">{title}</p>
              <p className="text-sm text-[#ADB7BE]">{issuer} • {date}</p>
            </div>
            <div className="relative h-[70vh] w-full bg-[#0f1419]">
              <Image
                src={src}
                alt={alt || title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}

      <article className="group overflow-hidden rounded-2xl bg-[#181818] shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative h-64 md:h-72 w-full overflow-hidden bg-[#0f1419] text-left"
          aria-label={`Open ${title} preview`}
        >
          <Image
            src={src}
            alt={alt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute inset-0 bg-black/10" />
        </button>

        <div className="px-5 py-6 text-white">
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-[#ADB7BE]">
            {issuer} • {date}
          </p>
        </div>
      </article>
    </>
  );
};

export default CertificationCard;
