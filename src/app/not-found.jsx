import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b0b0d] px-4 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#F59E3D] md:text-8xl">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</p>
        <p className="text-[#ADB7BE] mb-8 max-w-md">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block rounded-[14px] bg-[#F59E3D] px-6 py-3 font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,158,61,0.25)]"
          >
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="inline-block rounded-[14px] border border-[#F59E3D]/30 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#F59E3D]/60 hover:bg-[#F59E3D]/10"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
