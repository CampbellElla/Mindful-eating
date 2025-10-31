import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Card from "./ui/Card";
import AboutSection from "./ui/AboutSection";
import Footer from "./ui/Footer";
import Services from "./ui/Services";
import DietPlan from "./ui/DietPlan";
import Pricing from "./ui/Pricing";
import Team from "./ui/Team";
import Blog from "./ui/Blog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function Home() {
  return (
    <>
      <Hero />
      <Card />
      <AboutSection />
      <Services />
      <DietPlan />
      <Pricing />
      <Team />
      <Blog />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
