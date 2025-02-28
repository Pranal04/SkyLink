import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/firebaseConfig.js'
import { Users, Plane, Calendar, CreditCard, Clock, Settings, Bell } from 'lucide-react';

const AdminDash = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const stats = {
    totalBookings: bookings.length,
    revenue: bookings.reduce((total, booking) => total + booking.amount, 0),
    activeFlights: flights.filter(flight => flight.status === 'Active').length,
    todayDepartures: flights.filter(flight => {
      const today = new Date().toISOString().split('T')[0];
      return flight.departure.time.split('T')[0] === today;
    }).length
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

  const StatCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-2">{value}</p>
        </div>
        <Icon size={24} className="text-blue-500" />
      </div>
    </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={CreditCard} title="Total Bookings" value={stats.totalBookings} />
            <StatCard icon={Plane} title="Active Flights" value={stats.activeFlights} />
            <StatCard icon={Clock} title="Today's Departures" value={stats.todayDepartures} />
            <StatCard icon={CreditCard} title="Revenue" value={`$${stats.revenue.toLocaleString()}`} />
          </div>

          {/* Recent Bookings */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              {/* <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Passenger</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Flight</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bookings.slice(0, 5).map((booking) => (
                    <tr key={booking._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.bookingId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.passengerDetails.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.flightId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${booking.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDash;