import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import About from "../about/about";

const Footer = () => {
  return (
    <footer className="bg-blue-200 py-10">
      <div className="container mx-auto grid gap-10 text-center md:text-left md:grid-cols-4">
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <TiSocialFacebook className="w-8 h-8 border border-gray-300 p-1 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-transform transform hover:-translate-y-1" />
          <AiOutlineTwitter className="w-8 h-8 border border-gray-300 p-1 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-transform transform hover:-translate-y-1" />
          <AiFillYoutube className="w-8 h-8 border border-gray-300 p-1 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-transform transform hover:-translate-y-1" />
        </div>

        {/* Footer Links - Information */}
        <div>
          <h3 className="text-lg font-semibold pb-2">Information</h3>
          <ul className="space-y-2">
            {["Home", "Explore", "Flight Status", "Travel", "Check-In", "Manage Your Booking"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-transform block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links - Quick Guide */}
        <div>
          <h3 className="text-lg font-semibold pb-2">Quick Guide</h3>
          <ul className="space-y-2">
            {["FAQ", "How to", "Features", "Baggage", "Route Map", "Our Communities"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-transform block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links - Other Information */}
        <div>
          <h3 className="text-lg font-semibold pb-2">Other Info</h3>
          <ul className="space-y-2">
            {["Chauffeur", "Our Partners", "Destination", "Careers", "Transportation", "Programme Rules"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-transform block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* About Us Section */}
      <div className="border-t border-gray-400 text-gray-600 text-center py-4 mt-6">
        <About />
      </div>
    </footer>
  );
};

export default Footer;
