import React, { useEffect, useState } from "react";
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { db } from "/firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ShowFlights = ({ searchParams }) => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlights = async () => {
            setLoading(true);
            try {
                let flightsQuery = collection(db, "flights");

                if (searchParams.from) {
                    flightsQuery = query(flightsQuery, where("from", "==", searchParams.from));
                }
                if (searchParams.to) {
                    flightsQuery = query(flightsQuery, where("to", "==", searchParams.to));
                }
                if (searchParams.departureDate) {
                    flightsQuery = query(flightsQuery, where("departureDate", "==", searchParams.departureDate));
                }

                const querySnapshot = await getDocs(flightsQuery);
                const flightsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setFlights(flightsData);
            } catch (error) {
                console.error("Error fetching flights:", error);
            }
            setLoading(false);
        };

        fetchFlights();
    }, [searchParams]);

    return (
        <div>
            <h1 className="p-4 text-4xl mt-24 text-left text-blue-600 font-bold">Available Flights</h1>

            {loading ? (
                <p className="text-center text-gray-500 mt-10">Loading flights...</p>
            ) : flights.length > 0 ? (
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
                                    <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
                                        Rs. {flight.price}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 mt-10">No flights found.</p>
            )}
        </div>
    );
};

export default ShowFlights;
