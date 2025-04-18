
const certificates = [
  {
    title: "Data Structures and Algorithms - Self Paced",
    issuer: "Geeks For Geeks",
    date: "Aug 2024"
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "Coursera",
    date: "Apr 2024"
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "Mar 2024"
  }
];

export const Certificates = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="certificates">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.title} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">{cert.title}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500 mt-2">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
