function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-32">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-800">What We Offer</h3>
        <p className="mt-2 text-green-800 text-4xl font-semibold">
          Service $ Program
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Dietitian */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/MDE4.jpg"
            alt="Yoga Classes"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black/40 p-1 text-center">
            <h3 className="text-white text-xl font-bold">Yoga Classes</h3>
          </div>
        </div>

        {/* Yoga Classes */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/MDE5.jpg"
            alt=">Weight Gain"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black/40 p-1 text-center">
            <h3 className="text-white text-xl font-bold">Weight Gain</h3>
          </div>
        </div>

        {/* Weight Gain */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/MDE6.jpg"
            alt="Dietitian"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black/40 p-1 text-center">
            <h3 className="text-white text-xl font-bold">Dietitian</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
