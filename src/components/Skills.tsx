
import { Card } from "./ui/card";

const skillsData = {
  "Languages": ["C/C++", "Java", "Python"],
  "Developer Tools": ["Git", "GitHub", "Oracle SQL"],
  "Soft Skills": ["Problem-Solving Skills", "Team Player", "Project Management", "Adaptability"],
  "Areas of Interest": ["Competitive Programming", "Machine Learning", "Game development"]
};

export const Skills = () => {
  return (
    <section className="py-16 px-6" id="skills">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category} className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category}</h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
