import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import NavBar from "./components/Navbar";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
    <NavBar/>
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutSection />
      <ProjectSection/>
      <EmailSection/>
      <Footer/>
    </div>
  </main>
  );
}
