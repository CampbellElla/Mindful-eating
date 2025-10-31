import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gray-50 w-full min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/MDE.jpg"
            alt="Healthy mindful eating"
            className="rounded-2xl shadow-lg lg:h-[520px] w-full h-[400px] max-w-md md:max-w-lg object-cover"
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
            Nourish Your Mind and Body with{" "}
            <span className="text-green-600">Mindful Eating</span>
          </h1>

          <p className="text-gray-700 mt-4 md:text-lg">
            Transform your Health, One Bite at a Time. Nourish Your Body with
            Wholesome Foods, Fuel Your Mind with Nutrient-Rich Ingredients, and
            Discover a Happier, Healthier You. Eat Well.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <Link
              to="#about"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:opacity-95 transition"
            >
              Get Started
            </Link>
            <Link
              to="#pricing"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-50 transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
