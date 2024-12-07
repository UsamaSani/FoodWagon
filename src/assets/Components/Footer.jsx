import React from "react";
import instagramIcon from "../Images/icons8-instagram-24.png";
import facebookIcon from "../Images/icons8-facebook-30.png";
import twitterIcon from "../Images/icons8-twitter-30.png";
import envelopeIcon from "../Images/envelope.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 md:px-12 py-12">
      {/* Top Cities Section */}
      <div>
        <h3 className="text-white text-lg font-bold mb-6 text-center">
          Our Top Cities
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          <a href="#" className="hover:text-yellow-400 transition">San Francisco</a>
          <a href="#" className="hover:text-yellow-400 transition">Miami</a>
          <a href="#" className="hover:text-yellow-400 transition">San Diego</a>
          <a href="#" className="hover:text-yellow-400 transition">East Bay</a>
          <a href="#" className="hover:text-yellow-400 transition">Long Beach</a>
          <a href="#" className="hover:text-yellow-400 transition">Los Angeles</a>
          <a href="#" className="hover:text-yellow-400 transition">Washington DC</a>
          <a href="#" className="hover:text-yellow-400 transition">San Diego</a>
          <a href="#" className="hover:text-yellow-400 transition">East Bay</a>
          <a href="#" className="hover:text-yellow-400 transition">Long Beach</a>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Company, Contact, Legal, and Follow Us */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-yellow-400 transition">About Us</a>
            <a href="#" className="hover:text-yellow-400 transition">Team</a>
            <a href="#" className="hover:text-yellow-400 transition">Careers</a>
            <a href="#" className="hover:text-yellow-400 transition">Blog</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-yellow-400 transition">Help & Support</a>
            <a href="#" className="hover:text-yellow-400 transition">Partner with Us</a>
            <a href="#" className="hover:text-yellow-400 transition">Ride with Us</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-yellow-400 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-yellow-400 transition">Refund & Cancellation</a>
            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition">Cookie Policy</a>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#"><img src={instagramIcon} alt="Instagram" className="w-6 hover:scale-110 transition" /></a>
            <a href="#"><img src={facebookIcon} alt="Facebook" className="w-6 hover:scale-110 transition" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" className="w-6 hover:scale-110 transition" /></a>
          </div>
          <p className="text-sm mb-4">Receive exclusive offers in your mailbox</p>
          <div className="flex items-center space-x-2">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full py-2 px-4 text-sm rounded-lg border border-gray-600 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <img src={envelopeIcon} alt="Envelope" className="absolute right-4 top-2.5 w-4" />
            </div>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-lg text-sm font-semibold text-white shadow-md hover:from-yellow-500 hover:to-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Section */}
      <div className="text-center text-sm">
        <p>All Reserved By &copy; <strong className="text-white">Mazari Foods, 2024</strong></p>
        <p>
          Made By <strong className="text-yellow-400">Usama Sani Khanzada</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
