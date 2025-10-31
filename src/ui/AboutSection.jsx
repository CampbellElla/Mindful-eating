// import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const AboutSection = () => {
  const checklist = [
    "Cultivate awareness around hunger and fullness",
    "Enjoy food without guilt or restriction",
    "Make healthier, more intentional food choices",
    "Build sustainable eating habits for life",
  ];

  return (
    <section id="about" className="py-20 bg-white px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/MDE 2.jpg"
            alt="About Mindful Eating"
            className="rounded-2xl shadow-md lg:h-[520px] w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* RIGHT: Text + Checklist */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">Mindful Eating</span>
          </h2>

          <h1 className="text-3xl text-black mb-5">
            Fuel your body, fuel your life: Better nutrition for optimal health
            and happiness!"
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Mindful eating is about cultivating awareness and appreciation for
            every bite. It’s not just what you eat, but how you eat being
            present, enjoying the flavors, and understanding your body’s signals
            without guilt or restriction.
          </p>

          {/* ✅ CHECKLIST SECTION */}
          <ul className="space-y-4 mb-6">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                  <FaCheck className="text-sm" />
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed">
            Through mindfulness, we can reconnect with food, reduce stress, and
            build a healthier, more joyful relationship with eating. It’s a
            journey of balance, compassion, and intentional living.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
