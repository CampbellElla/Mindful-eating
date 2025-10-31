// import React from "react";
import AboutSection from "../ui/AboutSection";
import Card from "../ui/Card";
import Hero from "../ui/Hero";
import Services from "../ui/Services";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Card />
      <AboutSection />
      <Services />
    </div>
  );
};

export default Home;
