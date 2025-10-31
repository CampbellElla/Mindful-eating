// import React from "react";
import { FaLeaf, FaAppleAlt, FaUtensils, FaChartLine } from "react-icons/fa";

const Card = () => {
  const cards = [
    {
      icon: FaLeaf,
      title: "Healthy Recipe",
      text: "Indulge in the Flavor, Nourish Your Body! Our healthy recipe combines wholesome ingredients and expert techniques to create a dish.",
    },
    {
      icon: FaAppleAlt,
      title: "Nutrition Analysis",
      text: "Our expert analysis reveals the nutrient-dense secrets of your favorite foods, empowering you to make informed choices that fuel your body.",
    },
    {
      icon: FaUtensils,
      title: "Nutrition Plan",
      text: "Our expertly crafted plan provides a tailored roadmap to optimal wellness, balancing nutrient-dense foods and healthy habits to fuel.",
      active: true,
    },
    {
      icon: FaChartLine,
      title: "Progress Track",
      text: "Our progress tracking feature helps you monitor your journey, celebrate small wins, and stay motivated.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-2">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          The Magic Behind
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md text-center transition duration-300 ${
                card.active
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 hover:shadow-lg"
              }`}
            >
              <div
                className={`flex justify-center items-center text-4xl mb-4 ${
                  card.active ? "text-white" : "text-green-700"
                }`}
              >
                <card.icon />
              </div>

              <h3
                className={`text-lg font-semibold mb-2 ${
                  card.active ? "text-white" : "text-gray-800"
                }`}
              >
                {card.title}
              </h3>

              <p className={card.active ? "text-white/90" : "text-gray-600"}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
