import React, { useEffect, useState } from "react";
import { Plane } from "lucide-react";
import { useLocation } from "react-router-dom";
import { db } from "/firebaseConfig.js"; // Import Firestore instance
import { collection, getDocs, query, where } from "firebase/firestore";

const ShowFlightsReturn = () => {
    const [flights, setFlights] = useState([]);
    const location = useLocation();
    
    // Parse query params
    const searchParams = new URLSearchParams(location.search);
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const travelClass = searchParams.get("class");

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                let flightQuery = collection(db, "flights");

                if (from && to) {
                    flightQuery = query(flightQuery, where("from", "==", from), where("to", "==", to));
                }
                const querySnapshot = await getDocs(flightQuery);
                const flightsData = querySnapshot.docs
                    .map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    .filter(flight => flight.classType === travelClass); // Filter by class type

                setFlights(flightsData);
            } catch (error) {
                console.error("Error fetching flights:", error);
            }
        };

        fetchFlights();
    }, [from, to, travelClass]);
    const handleSearch = () => {
        navigate(`/showFlightsReturn?from=${departure}&to=${arrival}&date=${departureDate}&class=${selectedClass}`);
      };

    return (
        <div>
            <h1 className="p-4 text-4xl mt-24 text-left text-blue-600 font-bold">Available Flights</h1>

            {flights.length > 0 ? (
                flights.map((flight) => (
                    <div key={flight.id} className="w-full p-4 mt-4 mb-4 shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold">{flight.airline}</h2>
                                <span className="text-gray-500 text-sm">{flight.flightNumber}</span>
                            </div>

                            <div className="flex justify-between items-center text-lg font-medium">
                                <div className="text-left">
                                    <p className="text-gray-600 text-sm">Departure</p>
                                    <p>{flight.departureTime}</p>
                                    <p className="text-gray-500 text-sm">{flight.from}</p>
                                </div>
                                <p>{flight.duration}</p>
                                <Plane className="text-blue-500" />
                                <p>{flight.stops}</p>
                                <div className="text-right">
                                    <p className="text-gray-600 text-sm">Arrival</p>
                                    <p>{flight.arrivalTime}</p>
                                    <p className="text-gray-500 text-sm">{flight.to}</p>
                                </div>
                                <div className="items-right">
                                    <button onClick={handleSearch} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
                                        Rs. {flight.price}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 mt-10">No flights found. Try changing the search criteria.</p>
            )}
        </div>
    );
};

export default ShowFlightsReturn;
