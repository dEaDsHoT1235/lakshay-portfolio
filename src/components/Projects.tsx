
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "Credit Card Fraud Detection Mechanism",
    duration: "Sept 2024-Nov 2024",
    description: [
      "Developed a machine learning model to detect fraudulent transactions.",
      "Processed datasets using Python libraries like Pandas, NumPy, and Seaborn for exploratory data analysis (EDA).",
      "Implemented various ML algorithms and optimized feature selection to improve accuracy.",
      "Used Git for version control and collaborative debugging and testing."
    ],
    tech: "Python, Pandas, NumPy, Seaborn, Scikit-learn, Git"
  },
  {
    title: "Titanic Survival Analysis",
    duration: "Jun 2024-Jul 2024",
    description: [
      "Built a machine learning model to analyze survival probabilities in the Titanic disaster.",
      "Conducted feature engineering and applied supervised learning models to make accurate predictions.",
      "Debugged and optimized model performance through iterative testing."
    ],
    tech: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn"
  },
  {
    title: "Plastic Waste Management Website",
    duration: "Jan 2024-Feb 2024",
    description: [
      "A website dedicated to raising awareness about plastic waste management.",
      "Built using HTML, CSS, and JavaScript for a responsive and user-friendly design.",
      "Offers informative content on the environmental impact of plastic pollution.",
      "Provides practical solutions and tips for plastic waste reduction and recycling."
    ],
    tech: "HTML, CSS, JavaScript"
  }
];

export const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex justify-between items-start gap-2">
                <span className="text-xl font-bold text-indigo-600">{project.title}</span>
                <span className="text-sm text-gray-500 whitespace-nowrap">{project.duration}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t">
                <p className="text-sm font-semibold text-gray-500">Tech Stack: {project.tech}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
