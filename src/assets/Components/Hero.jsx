import React from 'react'
import bike from "../Images/bike.png";
import pickup from "../Images/pickup.png";
import redLocation from "../Images/redLocation.png";
import whiteSearch from "../Images/whiteSearch.png";
import andaNoodle from "../Images/noodle.png";
import {Link,NavLink} from 'react-router-dom'
function Hero() {
  return (
    <>
     {/* Hero Section */}
     <div
          className="relative bg-gradient-to-br from-yellow-400 to-orange-300 py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10"
        >
          <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto text-white">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6 z-10 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
                Are You <span className="text-orange-600">Starving?</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-800">
                <strong>
                  Within a few clicks, find meals that are accessible near you.
                </strong>
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <button className="flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold shadow-lg hover:scale-105 transform transition">
                  <img src={bike} alt="Delivery" className="w-5 mr-2 filter grayscale" />
                  Delivery
                </button>
                <button className="flex items-center px-5 py-3 rounded-full bg-gray-200 text-gray-800 font-bold shadow-lg hover:bg-gray-300 transition">
                  <img src={pickup} alt="PickUp" className="w-5 mr-2" />
                  PickUp
                </button>
              </div>
              <div className="flex items-center bg-white rounded-full p-3 w-full max-w-lg shadow-md mt-6 mx-auto lg:mx-0  inputFiled">
                <img
                  src={redLocation}
                  alt="Location"
                  className="w-6 mr-3 text-orange-500"
                />
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="flex-grow bg-transparent focus:outline-none text-gray-600 "
                />
                <button className="flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transform transition">
                  <img src={whiteSearch} alt="Search" className="w-5 mr-2" />
                  Find Food
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative flex justify-center">
                <img
                  src={andaNoodle}
                  alt="Food"
                  className="w-3/4 sm:w-2/3 lg:w-[80%] rounded-xl shadow-lg transform hover:scale-105 transition"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero