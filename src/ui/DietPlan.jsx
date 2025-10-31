function DietPlan() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section id="dietplan" className="py-20 bg-gray-100 scroll-mt-32">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Diet Plan</h2>
        <p className="mt-2 text-green-600 font-semibold">Weekly Diet Plan</p>
      </div>

      {/* Days of the Week */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {days.map((day) => (
          <div
            key={day}
            className="px-4 py-2 bg-green-500 shadow rounded-full text-gray-700 font-medium hover:bg-green-200 hover:text-green-600 transition"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md group">
          <img
            src="/MDE10.jpg"
            alt="Healthy Breakfast"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 w-full bg-black/40 group-hover:bg-green-600 transition-all duration-300 p-1 text-center">
            <h3 className="text-white text-xl font-bold">Healthy Breakfast</h3>
          </div>
        </div>

        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md group">
          <img
            src="/MDE7.jpg"
            alt="Healthy Lunch"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 w-full bg-black/40 group-hover:bg-green-600 transition-all duration-300 p-1 text-center">
            <h3 className="text-white text-xl font-bold">Healthy Lunch</h3>
          </div>
        </div>

        {/* Healthy Dinner */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md group">
          <img
            src="/MDE11.jpg"
            alt="Healthy Dinner"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 w-full bg-black/40 group-hover:bg-green-600 transition-all duration-300 p-1 text-center">
            <h3 className="text-white text-xl font-bold">Healthy Dinner</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DietPlan;
