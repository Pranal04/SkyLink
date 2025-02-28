import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/firebaseConfig.js'
import { Users, Plane, Calendar, CreditCard, Clock, Settings, Bell } from 'lucide-react';

const AdminSched = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchFlights = async () => {
    const flightsSnap = await getDocs(collection(db, 'flights'));
    setFlights(flightsSnap.docs.map(doc => doc.data())); // Extracting data from Firestore docs
    setLoading(false);
  };

  fetchFlights();
}, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const bookingsSnap = await getDocs(collection(db, 'bookings'));
  //     const flightsSnap = await getDocs(collection(db, 'flights'));
  //     setBookings(bookingsSnap.docs.map(doc => doc.data()));
  //     setFlights(flightsSnap.docs.map(doc => doc.data()));
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // Calculate statistics from real data
  
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
            <h2 className="text-lg font-semibold mb-4">Available Flights</h2>
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Flight ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">From</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">To</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Departure Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Arrival Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Airline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stops</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>                  
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {flights.map((flight) => (
                    <tr key={flight._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {flight._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.flightNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.from}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.to}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.departureTime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.arrivalTime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.airline}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.stops}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSched;