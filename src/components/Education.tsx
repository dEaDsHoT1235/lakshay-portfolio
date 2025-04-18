
import { Card, CardContent } from "./ui/card";

const education = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    location: "Punjab, India",
    duration: "Aug 2022 - Present",
    grade: "CGPA: 6.7"
  },
  {
    school: "KC Public School",
    degree: "Intermediate",
    location: "jammu, j&k",
    duration: "Apr 2019 - Mar 2020",
    grade: "Percentage: 80.4%"
  },
  {
    school: "KC Public School",
    degree: "Matriculation",
    location: "jammu, j&k",
    duration: "Apr 2016 - Mar 2018",
    grade: "Percentage: 84.4%"
  }
];

export const Education = () => {
  return (
    <section className="py-16 px-6" id="education">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu) => (
          <Card key={edu.degree} className="relative hover:shadow-lg transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 rounded-l"></div>
            <CardContent className="p-6 pl-8">
              <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
              <p className="text-indigo-600 font-medium">{edu.degree}</p>
              <div className="mt-2 text-gray-600">
                <p>{edu.location}</p>
                <p>{edu.duration}</p>
                <p className="font-medium">{edu.grade}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
