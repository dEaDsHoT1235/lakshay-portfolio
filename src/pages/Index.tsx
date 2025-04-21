
import { AboutMe } from "@/components/AboutMe";
import { Achievements } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SocialLinks } from "@/components/SocialLinks";

// Unsplash deep learning visual (circuit board macro)
// Can be swapped for any other Unsplash AI/hardware-style background
const backgroundImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Themed Deep Learning BG */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6) blur(2px)",
        }}
      />
      {/* Overlay for contrast */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/70 to-black/60 pointer-events-none" />
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;

