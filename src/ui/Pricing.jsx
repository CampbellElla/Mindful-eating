import { FaCheck } from "react-icons/fa";

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 scroll-mt-32">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Pricing</h2>
        <p className="mt-2 text-green-600 font-semibold">Choose Your Plan</p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Standard Plan (highlighted) */}
        <div className="bg-green-600 text-white shadow-xl rounded-2xl p-8 text-center scale-105">
          <h3 className="text-2xl font-semibold mb-2">Standard</h3>
          <p className="text-green-100 mb-6">For consistent progress</p>
          <h4 className="text-4xl font-bold mb-6">$39</h4>

          <ul className="space-y-4 mb-8 text-left">
            {[
              "Personalized meal plan",
              "Weekly check-ins",
              "24/7 chat support",
              "Access to live classes",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                  <FaCheck className="text-green-600 text-sm" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-green-50 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Premium</h3>
          <p className="text-gray-500 mb-6">For full access & results</p>
          <h4 className="text-4xl font-bold text-green-600 mb-6">$59</h4>

          <ul className="space-y-4 mb-8 text-left text-gray-700">
            {[
              "All Standard features",
              "1-on-1 dietitian session",
              "Personalized fitness plan",
              "Priority support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-1.5 flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-50 transition">
            Book Now
          </button>
        </div>

        {/* Customized Plan */}
        <div className="bg-green-50 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Customized
          </h3>
          <p className="text-gray-500 mb-6">Tailored to your unique goals</p>
          <h4 className="text-4xl font-bold text-green-600 mb-6">$79</h4>

          <ul className="space-y-4 mb-8 text-left text-gray-700">
            {[
              "All Premium features",
              "Customized workout & diet plan",
              "Dedicated personal coach",
              "Exclusive member resources",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-1.5 flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-50 transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
