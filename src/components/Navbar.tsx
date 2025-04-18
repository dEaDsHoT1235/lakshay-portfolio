
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">Lakshay Singh</h1>
      <div className="flex gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/dEaDsH0T1235" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/lakshay-singho8/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:lakshaylli235@gmail.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </nav>
  );
};
