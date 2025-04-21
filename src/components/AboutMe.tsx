import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, User } from "lucide-react";

export const AboutMe = () => {
  const pdfPath = "/cv.pdf";

  const handleResumeClick = () => {
    window.open(pdfPath, "_blank", "noopener,noreferrer");

    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "LakshaySingh_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 px-6 bg-gray-50" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-64 h-64">
              <AvatarImage src="/lovable-uploads/732e7a6f-3c67-495e-bdc8-ed90f80a98a0.png" alt="Profile photo" />
              <AvatarFallback>
                <User className="w-32 h-32 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" className="w-full" onClick={handleResumeClick}>
              <FileText className="mr-2" />
              Download Resume
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
