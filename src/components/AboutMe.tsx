
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download, FileText, Github, Linkedin, Mail, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-64 h-64">
              <AvatarImage src="/placeholder.svg" alt="Profile photo" />
              <AvatarFallback>
                <User className="w-32 h-32 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" className="w-full" asChild>
              <a href="/cv.pdf" download>
                <FileText className="mr-2" />
                Download CV
              </a>
            </Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                I am a passionate Computer Science Engineer with a strong foundation in Machine Learning. 
                Currently pursuing my B.Tech in Computer Science Engineering, I have developed a keen 
                interest in solving complex problems through coding and implementing innovative solutions.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in technology has been marked by continuous learning and practical application 
                of skills through various projects and coding challenges. I am particularly enthusiastic 
                about Machine Learning and its potential to transform various industries.
              </p>
              <div className="flex gap-4 justify-center pt-4 border-t">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
