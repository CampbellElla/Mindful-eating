function Team() {
  return (
    <section
      id="team"
      className="py-20 bg-green-100 text-center relative overflow-hidden"
    >
      {/* Heading */}
      <div className="mb-12">
        <h3 className="text-green-600 font-semibold text-lg mb-2">Team</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet Our Team
        </h2>
      </div>

      {/* Desktop Curved dotted line */}
      <svg
        className="hidden md:block absolute left-1/2     -translate-x-1/2 top-[220px] w-[90%] max-w-4xl"
        height="120"
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 150 Q 400 50 800 150"
          stroke="#4ade80"
          strokeWidth="3"
          strokeDasharray="6 6"
          fill="transparent"
        />
      </svg>

      {/* Mobile straight dotted line */}
      <svg
        className="block md:hidden absolute left-1/2 -translate-x-1/2 top-44 h-[80%] w-[2px]"
        viewBox="0 0 2 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="800"
          stroke="#4ade80"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Team Members */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16 md:gap-20 relative z-10">
        {/* Member 1 */}
        <div className="relative flex flex-col items-center">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="/MDE12.jpg"
              alt="Miss Halimah"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-4 text-center bg-green-300 p-3 rounded-full">
            <h3 className="font-semibold text-gray-800">Miss Airmma</h3>
            <p className="text-gray-500 text-sm">Junior Chef</p>
          </div>
          {/* Badge 1 */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%-80px)] md:top-36 md:left-[80%] bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold shadow-md">
            1
          </div>
        </div>

        {/* Member 2 */}
        <div className="relative flex flex-col items-center md:mt-[-50px]">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="/MDE13.jpg"
              alt="Mr John"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-4 text-center bg-green-300 p-3 rounded-full">
            <h3 className="font-semibold text-gray-800">Mr John</h3>
            <p className="text-gray-500 text-sm">Senior Chef</p>
          </div>
          {/* Badge 2 */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%-80px)] md:top-14 md:right-[15%] bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold shadow-md">
            2
          </div>
        </div>

        {/* Member 3 */}
        <div className="relative flex flex-col items-center">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="/MDE14.jpg"
              alt="Mr Balogun"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 text-center bg-green-300 p-3 rounded-full">
            <h3 className="font-semibold text-gray-800">Mr Balogun</h3>
            <p className="text-gray-500 text-sm">Junior Chef</p>
          </div>
          {/* Badge 3 */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%-80px)] md:top-36 md:left-[10%] bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold shadow-md">
            3
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
