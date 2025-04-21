
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900/80 via-purple-900/90 to-black/80">
      <div className="max-w-4xl w-full flex flex-col items-center bg-white/80 rounded-lg shadow-lg p-8 relative">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="absolute left-8 top-8"
        >
          <ArrowLeft className="mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-bold mb-6 mt-4">Resume</h2>
        <img
          src="/lovable-uploads/c6f43bf4-6081-41a0-a39f-4a665e29a113.png"
          alt="Resume of Lakshay Singh Langeh"
          className="shadow-lg border rounded-xl max-w-full"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    </div>
  );
};

export default Resume;
