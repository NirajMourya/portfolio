import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</p>
        <p className="text-[#ADB7BE] mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-6 py-3 text-white hover:bg-slate-200 transition"
          >
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="inline-block rounded-full border-2 border-primary-500 px-6 py-3 text-white hover:bg-primary-500/10 transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
