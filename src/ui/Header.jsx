import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Smooth scroll + navigate handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    closeMenu();

    // If not on the homepage, navigate first
    if (location.pathname !== "/") {
      navigate("/");

      // Wait a bit for the homepage to load, then scroll
      setTimeout(() => {
        if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.querySelector(`#${id}`);
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      // Already on homepage
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.querySelector(`#${id}`);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="text-2xl font-bold text-green-600"
        >
          Mindful<span className="text-gray-800">Eating</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6 text-gray-700 font-medium">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-green-600"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-green-600 transition"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="hover:text-green-600"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, "pricing")}
              className="hover:text-green-600"
            >
              Pricing
            </a>
            <a
              href="#blog"
              onClick={(e) => handleScroll(e, "blog")}
              className="hover:text-green-600"
            >
              Blog
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-3 ml-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md border border-green-500 text-green-600 font-semibold hover:bg-green-50"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 rounded-md bg-green-600 text-white font-semibold shadow-sm hover:opacity-95"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-3 py-4 text-gray-700 font-medium">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="w-full text-center py-2"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="w-full text-center py-2"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="w-full text-center py-2"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, "pricing")}
              className="w-full text-center py-2"
            >
              Pricing
            </a>
            <a
              href="#blog"
              onClick={(e) => handleScroll(e, "blog")}
              className="w-full text-center py-2"
            >
              Blog
            </a>

            <div className="w-full border-t mt-2 pt-3 flex flex-col items-center gap-3 px-6">
              <Link
                to="/login"
                className="w-full text-center px-4 py-2 rounded-md border border-green-500 text-green-600 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-full text-center px-4 py-2 rounded-md bg-green-600 text-white font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
