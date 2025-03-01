import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '/firebaseConfig.js'
import { Users, Plane, Calendar, CreditCard, Settings, Bell } from 'lucide-react';

const AddFlights = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [flightData, setFlightData] = useState({
    flightNumber: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    classType: "",
    airline: "",
    price: "",
    stops: "",
    duration: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFlightData({ ...flightData, [e.target.name]: e.target.value });
  };

  const addFlight = async () => {
    try {
      await addDoc(collection(db, "flights"), flightData);
      alert("Flight added successfully!");
      setFlightData({
        flightNumber: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        classType: "",
        airline: "",
        price: "",
        stops: "",
        duration: ""
      });
    } catch (error) {
      console.error("Error adding flight:", error);
      alert("Failed to add flight.");
    }
  };

  const SidebarItem = ({ icon: Icon, text, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full p-3 rounded-lg transition-colors ${
        isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{text}</span>
    </button>
  );

  // if (loading) {
  //   return <div className="flex h-screen items-center justify-center">Loading...</div>;
  // }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white border-r w-64 p-4 transition-all ${sidebarOpen ? '' : '-ml-64'}`}>
        <div className="mb-8">
          <h1 className="text-xl font-bold">Flight Admin</h1>
        </div>
        
        <nav className="space-y-2">
          <SidebarItem 
            icon={Plane}
            text="Dashboard"
            isActive={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <SidebarItem 
            icon={Calendar}
            text="Flight Schedule"
            isActive={activeTab === 'schedule'}
            onClick={() => setActiveTab('schedule')}
          />
          <SidebarItem
            icon={Plane}
            text="Add Flights"
            isActive={activeTab === 'AddFlights'}
            onClick={() => setActiveTab('AddFlights')}
          />
          <SidebarItem 
            icon={Users}
            text="Passengers"
            isActive={activeTab === 'passengers'}
            onClick={() => setActiveTab('passengers')}
          />
          <SidebarItem 
            icon={CreditCard}
            text="Bookings"
            isActive={activeTab === 'bookings'}
            onClick={() => setActiveTab('bookings')}
          />
          <SidebarItem 
            icon={Settings}
            text="Settings"
            isActive={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Bell size={20} />
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Add Flight</h2>
            <div className="flex flex-col gap-4 w-full max-w-lg">
              <input 
                type="text" name="flightNumber" 
                placeholder="Flight Number" value={flightData.flightNumber} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="from" 
                placeholder="Departure Airport" value={flightData.from} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="to" 
                placeholder="Arrival Airport" value={flightData.to} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="departureTime" 
                placeholder="Departure Time" value={flightData.departureTime} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="arrivalTime" 
                placeholder="Arrival Time" value={flightData.arrivalTime} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="classType" 
                placeholder="Travel Class" value={flightData.classType} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="airline" 
                placeholder="Airline" value={flightData.airline} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="price" 
                placeholder="Price" value={flightData.price} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="stops" 
                placeholder="Stops" value={flightData.stops} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
              <input 
                type="text" name="duration" 
                placeholder="Duration" value={flightData.duration} 
                onChange={handleChange} 
                className="text-blue-600 p-3 border border-blue-600 rounded-lg text-lg font-semibold"
              />
            </div>
            <button 
              onClick={addFlight} 
              className="mt-4 bg-blue-600 text-white p-3 rounded-lg">
              Add Flight
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddFlights;