
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const SocialLinks = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 flex justify-center items-center">
      <div className="flex gap-6">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/dEaDsH0T1235" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/lakshay-singho8/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:lakshaylli235@gmail.com">
            <Mail className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  );
};
