import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "/firebaseConfig.js"; // Ensure correct path
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa"; // Profile Icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <section className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">SkyLink</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-blue-600 font-semibold hover:text-gray-500">About</Link>
          <Link to="/book" className="text-blue-600 font-semibold hover:text-gray-500">Book</Link>
          <Link to="/offers" className="text-blue-600 font-semibold hover:text-gray-500">Offers</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
              <FaUserCircle size={28} className="text-blue-600 cursor-pointer" />
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 absolute top-16 left-0 w-full shadow-md transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><Link to="/" className="text-blue-600 font-semibold hover:text-gray-500">About</Link></li>
            <li><Link to="/book" className="text-blue-600 font-semibold hover:text-gray-500">Book</Link></li>
            <li><Link to="/offers" className="text-blue-600 font-semibold hover:text-gray-500">Offers</Link></li>
            {user ? (
              <>
                <li><FaUserCircle size={28} className="text-blue-600 cursor-pointer" /></li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
