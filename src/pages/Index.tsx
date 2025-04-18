
import { Achievements } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Achievements />
    </div>
  );
};

export default Index;
