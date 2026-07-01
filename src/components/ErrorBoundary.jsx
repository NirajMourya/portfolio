"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b0b0d] px-4 text-white">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">Oops!</h1>
        <p className="text-xl font-semibold mb-2">Something went wrong</p>
        <p className="text-[#ADB7BE] mb-8">
          We encountered an unexpected error. Please try again or contact support if the problem
          persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-block rounded-[14px] bg-[#F59E3D] px-6 py-3 font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,158,61,0.25)]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block rounded-[14px] border border-[#F59E3D]/30 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#F59E3D]/60 hover:bg-[#F59E3D]/10"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
