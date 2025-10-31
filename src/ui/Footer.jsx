function Footer() {
  return (
    <>
      <footer className="max-w-7xl mx-auto bg-green-600 text-white py-3  md:px-20">
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo & Text */}
          <div className="flex flex-col items-start text-left ">
            <h2 className="text-2xl font-bold">
              MINDFUL <span className="text-green-800">EATING</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Lose weight, gain energy, and feel amazing with our personalized
              diet plan. Mindful Eating supports your goals every step of the
              way.
            </p>
            <img
              src="/MDE.jpg"
              alt="Mindful Eating"
              className="w-24 h-24 object-cover rounded-lg mt-3"
            />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#home" className="hover:text-orange-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-orange-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#faq" className="hover:text-orange-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-orange-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-orange-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-2">
              Subscribe for tips, updates, and special offers.
            </p>
            <form className="flex bg-white rounded-full">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-3 py-2 text-gray-700 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 px-4 py-2 text-white text-sm font-semibold hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Copyright outside footer */}
      <div className="max-w-7xl mx-auto bg-black text-white/80 py-3 text-center text-sm">
        © 2025 Mindful Eating. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
