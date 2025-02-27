import  { React, useState } from "react";
import ShowFlights from "../ShowFlights/ShowFlights.jsx";

const Book = () => {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departureDate: "",
    arrivalDate: "",
    passengers: "",
    flightClass: "Economy",
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="flex flex-col justify-center items-center h-[70vh] bg-gray-100 text-blue-600 text-center px-5">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            {/* Flight Class Buttons */}
            <div className="flex bg-blue-200 border border-blue-400 p-2 rounded-lg space-x-3">
              {["Economy", "Business Class", "First Class"].map((cls) => (
                <button
                  key={cls}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    searchParams.flightClass === cls ? "bg-blue-600 text-white" : "hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => setSearchParams({ ...searchParams, flightClass: cls })}
                >
                  {cls}
                </button>
              ))}
            </div>

            {/* Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
              <input type="text" name="from" placeholder="Departure Airport" value={searchParams.from} onChange={handleChange} className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"/>
              <input type="text" name="to" placeholder="Arrival Airport" value={searchParams.to} onChange={handleChange} className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"/>
              <input type="date" name="departureDate" value={searchParams.departureDate} onChange={handleChange} className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"/>
              <input type="date" name="arrivalDate" value={searchParams.arrivalDate} onChange={handleChange} className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"/>
              <input type="text" name="passengers" placeholder="No. of Passengers" value={searchParams.passengers} onChange={handleChange} className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"/>
            </div>
          </div>
        </div>
      </section>

      {/* Display Flights Based on Search */}
      <ShowFlights searchParams={searchParams} />
    </div>
  );
};

export default Book;
