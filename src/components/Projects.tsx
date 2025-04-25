import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "Credit Card Fraud Detection Mechanism",
    duration: "Sept 2024-Nov 2024",
    tech: "Python, Pandas, NumPy, Seaborn, Scikit-learn, Git",
    image: "/lovable-uploads/f1d8929a-19c1-43df-a9b0-f7b7e1e5239e.png"
  },
  {
    title: "Titanic Survival Analysis",
    duration: "Jun 2024-Jul 2024",
    tech: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn",
    image: "/lovable-uploads/f08d713f-5191-4654-972d-2b15e06ef9fa.png"
  },
  {
    title: "Plastic Waste Management Website",
    duration: "Jan 2024-Feb 2024",
    tech: "HTML, CSS, JavaScript",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
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
            <CardContent className="flex-grow flex flex-col justify-center items-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-56 object-cover mb-6 shadow"
              />
              <div className="mt-auto pt-4 border-t w-full">
                <p className="text-sm font-semibold text-gray-500">Tech Stack: {project.tech}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
