// import React from "react";

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-full px-4 md:px-16 py-10 bg-white text-gray-800"
    >
      {/* ====== Articles Section ====== */}
      <div className="text-center mb-10">
        <p className="text-orange-600 font-semibold">Article</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-1">
          Our Latest Article
        </h2>
      </div>

      {/* Article Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        {/* Card 1 */}
        <div className="bg-green-100 shadow-md rounded-lg overflow-hidden">
          <img
            src="/MDE15.jpg"
            alt="Article 1"
            className="w-full h-80 object-cover object-bottom"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg mb-2">
              Best Weight-Loss Programs of 2024
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              WeightWatchers: This weight loss program focuses on long-term
              weight loss through behavioral change, nutrition science, and
              social support.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 shadow-md rounded-lg overflow-hidden">
          <img
            src="/MDE17.jpg"
            alt="Article 2"
            className="w-full h-80 object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg mb-2">Best Diet Plans Of 2024</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              These diet plans prioritize nutrient-dense foods, sustainable
              weight loss, and healthy habits. Goodbye to fad diets say hello to
              a healthier you.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-green-100 shadow-md rounded-lg overflow-hidden">
          <img
            src="/MDE16.jpg"
            alt="Article 3"
            className="w-full h-80 object-cover object-bottom"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg mb-2">Mayo Clinic Diet</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The Mayo Clinic Diet is a 12-week program for sustainable weight
              loss and healthy habits through portion control and mindful
              eating.
            </p>
          </div>
        </div>
      </div>

      {/* ====== Feedback Section ====== */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mt-1">Feedback Corner</h2>
      </div>

      {/* Feedback Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        {/* Feedback 1 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md relative">
          <p className="text-green-800 text-4xl font-serif mb-3">&ldquo;</p>
          <h3 className="font-semibold text-lg mb-1">Emily Wilson</h3>
          <p className="text-sm text-gray-700">
            I lost 15 pounds in just 3 months with this program! The meal plans
            and workout routines were easy to follow and tailored to my needs.
          </p>
        </div>

        {/* Feedback 2 */}
        <div className="bg-green-700 text-white p-6 rounded-lg shadow-md relative">
          <p className="text-white text-4xl font-serif mb-3">&ldquo;</p>
          <h3 className="font-semibold text-lg mb-1">Sarah Thompson</h3>
          <p className="text-sm">
            I was struggling to stick to a diet, but this program's supportive
            community and accountability features kept me on track. I've lost 20
            pounds and feel amazing!
          </p>
        </div>

        {/* Feedback 3 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md relative">
          <p className="text-green-800 text-4xl font-serif mb-3">&ldquo;</p>
          <h3 className="font-semibold text-lg mb-1">Olivia Martinez</h3>
          <p className="text-sm text-gray-700">
            I was skeptical at first, but the personalized coaching and
            nutrition advice helped me achieve my weight loss goals. I feel more
            confident and energized than ever!
          </p>
        </div>
      </div>

      {/* ====== Call to Action ====== */}
      <div className=" max-w-7xl mx-auto bg-green-700 text-white text-center py-10 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Unlock your dream body
        </h2>
        <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-green-100 transition">
          Join Us Now
        </button>
      </div>
    </section>
  );
};

export default Blog;
