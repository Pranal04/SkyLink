import React, { useState } from "react";

const Home = () => {
  const [selectedClass, setSelectedClass] = useState("Economy");

  return (
    <section className="flex flex-col justify-center items-center h-[70vh] bg-gray-100 text-blue-600 text-center px-5">
      <div className="container mx-auto">
        {/* Home Text */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold">SkyLink</h1>
          <p className="text-lg font-medium">Book your next flight with SkyLink</p>
        </div>

        {/* Search Container */}
        <div className="flex flex-col items-center gap-6">
          {/* Flight Class Buttons */}
          <div className="flex bg-blue-200 border border-blue-400 p-2 rounded-lg space-x-3">
            {["Economy", "Business Class", "First Class"].map((cls) => (
              <button
                key={cls}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  selectedClass === cls ? "bg-blue-600 text-white" : "hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => setSelectedClass(cls)}
              >
                {cls}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
            <input
              type="text"
              placeholder="Departure Airport"
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
            <input
              type="text"
              placeholder="Arrival Airport"
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
            
            <label> Departure Date </label>
            <input
              type="date"
              placeholder="Check In"
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
            <label> Arrival Date </label>
            <input
              type="date"
              placeholder="Check Out"
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
          </div>

          {/* Search Flights Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Search Flights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
