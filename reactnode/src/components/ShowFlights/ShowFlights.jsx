import React from "react"
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";    

const ShowFlights = () => {
    return (
        <div>
            <h1 className="p-4 text-4xl mt-24 text-left text-blue-600 font-bold"> Choose Your Preferred Fight From Mumbai to New York </h1>
            <div className="w-full p-4 mt-14 mb-4 shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Airline Name</h2>
                        <span className="text-gray-500 text-sm">FL1234</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-lg font-medium">
                        <div className="text-left">
                            <p className="text-gray-600 text-sm">Departure</p>
                            <p>10:00 AM</p>
                            <p className="text-gray-500 text-sm">Mumbai (BOM)</p>
                        </div>
                        <p>15h 30m</p>
                        <Plane className="text-blue-500" />
                        <p>Non-Stop</p>
                        <div className="text-right">
                            <p className="text-gray-600 text-sm">Arrival</p>
                            <p>1:30 PM</p>
                            <p className="text-gray-500 text-sm">Los Angeles (LAX)</p>
                        </div>
                        <div className="items-right">
                            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"> Rs. 50,000 </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 mt-4 mb-4 shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Airline Name</h2>
                        <span className="text-gray-500 text-sm">FL1234</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-lg font-medium">
                        <div className="text-left">
                            <p className="text-gray-600 text-sm">Departure</p>
                            <p>10:00 AM</p>
                            <p className="text-gray-500 text-sm">Mumbai (BOM)</p>
                        </div>
                        <p>15h 30m</p>
                        <Plane className="text-blue-500" />
                        <p>Non-Stop</p>
                        <div className="text-right">
                            <p className="text-gray-600 text-sm">Arrival</p>
                            <p>1:30 PM</p>
                            <p className="text-gray-500 text-sm">Los Angeles (LAX)</p>
                        </div>
                        <div className="items-right">
                            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"> Rs. 50,000 </Link>
                        </div>
                    </div>
                </div>
            </div><div className="w-full p-4 mt-4 mb-14 shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Airline Name</h2>
                        <span className="text-gray-500 text-sm">FL1234</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-lg font-medium">
                        <div className="text-left">
                            <p className="text-gray-600 text-sm">Departure</p>
                            <p>10:00 AM</p>
                            <p className="text-gray-500 text-sm">Mumbai (BOM)</p>
                        </div>
                        <p>15h 30m</p>
                        <Plane className="text-blue-500" />
                        <p>Non-Stop</p>
                        <div className="text-right">
                            <p className="text-gray-600 text-sm">Arrival</p>
                            <p>1:30 PM</p>
                            <p className="text-gray-500 text-sm">Los Angeles (LAX)</p>
                        </div>
                        <div className="items-right">
                            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"> Rs. 50,000 </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left">
                <h2 className="p-4 text-4xl mb-10 text-blue-600 font-bold"> Explore </h2>
                <div className=" flex flex-cols gap-4 items-center p-4 ">
                    <div className="mb-14 max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/278px-Los_Angeles_with_Mount_Baldy.jpg" alt="Random Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Los Angeles</div>
                        </div>
                    </div>
                    <div className="mb-14 max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/278px-Los_Angeles_with_Mount_Baldy.jpg" alt="Random Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Los Angeles</div>
                        </div>
                    </div>
                    <div className="mb-14 max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/278px-Los_Angeles_with_Mount_Baldy.jpg" alt="Random Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Los Angeles</div>
                        </div>
                    </div>
                    <div className="mb-14 max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/278px-Los_Angeles_with_Mount_Baldy.jpg" alt="Random Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Los Angeles</div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default ShowFlights