"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white px-4">
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
            className="inline-block rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-6 py-3 text-white hover:bg-slate-200 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block rounded-full border-2 border-primary-500 px-6 py-3 text-white hover:bg-primary-500/10 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
