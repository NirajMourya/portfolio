import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import CertificationSection from "./components/CertificationSection";
import NavBar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="flex min-h-screen flex-col bg-[#0b0b0d]">
      <NavBar />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <CertificationSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
