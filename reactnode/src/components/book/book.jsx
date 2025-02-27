import  { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [selectedClass, setSelectedClass] = useState("Economy");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/showFlights?from=${departure}&to=${arrival}&date=${departureDate}&class=${selectedClass}`);
  };

  return (
    <section className="flex flex-col justify-center items-center h-[70vh] bg-gray-100 text-blue-600 text-center px-5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
            <input
              type="text"
              placeholder="Departure Airport"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
            <input
              type="text"
              placeholder="Arrival Airport"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
            <input
              type="number"
              placeholder="No. of Passengers"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full p-3 border border-blue-600 rounded-lg text-lg text-center font-semibold"
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Search Flights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Book;
