import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PassengerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedFlight, returnFlight } = location.state || {};

  const totalPrice = Number(selectedFlight?.price) + Number(selectedFlight?.price || 0);

  return (
    <div className="mt-24 flex flex-col lg:flex-row gap-8 p-8">
      {/* Passenger Details Section */}
      <div className="w-full lg:w-3/5 bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-600">
          Enter Passenger Details
        </h1>

        <div className="mt-6 p-4 border rounded-lg shadow">
          <h2 className="text-lg font-semibold text-blue-600">Adult 1</h2>
          <p className="text-gray-500">Passenger 1</p>

          {/* Gender Selection */}
          <div className="mt-4 flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Male" required />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Female" required />
              Female
            </label>
          </div>

          {/* Name Input Fields */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First and Middle Name"
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
      </div>

      {/* Flight Summary Section */}
      <div className="w-full lg:w-2/5 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold text-blue-600">Trip Summary</h2>

        <div className="mt-4 p-4 border rounded-lg shadow">
          <h3 className="text-lg font-semibold text-blue-600">Flight Summary</h3>

          {/* Outbound Flight */}
          <div className="mt-4">
            <p className="text-gray-600 font-medium">Departing</p>
            <p className="text-blue-600 font-semibold">{selectedFlight?.airline}</p>
            <p className="text-gray-500">
              {selectedFlight?.from} → {selectedFlight?.to}
            </p>
            <p className="text-sm text-gray-500">
              {selectedFlight?.departureTime} - {selectedFlight?.arrivalTime} |{" "}
              {selectedFlight?.duration}
            </p>
            <p className="text-gray-500 text-sm">
              Check-in: 15KG | Hand: Up to 7KG
            </p>
          </div>

          {/* Return Flight */}
            <div className="mt-4">
              <p className="text-gray-600 font-medium">Returning</p>
              <p className="text-blue-600 font-semibold">{selectedFlight?.airline}</p>
              <p className="text-gray-500">
                {selectedFlight?.from} → {selectedFlight?.to}
              </p>
              <p className="text-sm text-gray-500">
                {selectedFlight?.departureTime} - {selectedFlight?.arrivalTime} |{" "}
                {selectedFlight?.duration}
              </p>
              <p className="text-gray-500 text-sm">
                Check-in: 15KG | Hand: Up to 7KG
              </p>
            </div>

          {/* Total Fare */}
          <div className="mt-6 flex justify-between">
            <p className="text-lg font-semibold text-gray-700">Total Fare</p>
            <p className="text-xl font-bold text-blue-600">₹{totalPrice}</p>
          </div>
        </div>

        {/* Proceed to Payment Button */}
        <button
          // onClick={() => navigate("/payment")}
          className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PassengerDetails;
