
export const Achievements = () => {
  return (
    <section className="py-16 px-6" id="achievements">
      <h2 className="text-3xl font-bold text-center mb-10">Achievements</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Solved 200+ Problems on various coding platforms</h3>
          <p className="text-gray-600">Solving DSA problems and regular participating at Leetcode and GeeksForGeeks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Active Participation in Multiple Contests</h3>
          <p className="text-gray-600">Competing in Various Coding and Tech Contests to Enhance Skills and Gain Experience</p>
        </div>
      </div>
    </section>
  );
};
