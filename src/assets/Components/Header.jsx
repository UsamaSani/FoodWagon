import React, { useState } from "react";
import logo from "../Images/Logo.png";
import searchIcon from "../Images/Search.png";
import userIcon from "../Images/user.png";
import {Link} from 'react-router-dom'
const navbtn = [
  {
    btn:"Home",
    path:"/"
  },
  {
    btn:"MyPortFolio",
    path:"/MyPortFolio"
  },
  {
    btn:"BLog",
    path:"/Blog"
  },
  {
    btn:"About Us",
    path:"/About"
  },
]
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-50 shadow-md">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-10 relative">
          {/* Logo */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            <img src={logo} alt="Logo" className="w-24 sm:w-28 lg:w-32" />
            <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
  className={`${
    isMenuOpen ? "block" : "hidden"
  } lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-gray-50 lg:bg-transparent w-full lg:w-auto left-0 top-full lg:top-auto p-4 lg:p-0 z-50 shadow-lg lg:shadow-none`}
>
  {navbtn.map((item) => (
    <Link
      key={item}
      to={item.path} 
      className="block lg:inline-block px-3 py-2 lg:px-4 lg:py-2 font-medium text-gray-700 hover:text-orange-500 hover:underline transition duration-300"
    >
      {item.btn}
    </Link>
  ))}
</div>


          {/* Search and Login Section */}
          <div className="hidden lg:flex items-center space-x-3 sm:space-x-4">
            <p className="flex items-center text-sm sm:text-base text-gray-700 hover:text-orange-500 transition">
              <img src={searchIcon} alt="Search Icon" className="w-4 sm:w-5 mr-2" />
              <strong>Search Food</strong>
            </p>
            <a
              href="#"
              className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-yellow-400 text-yellow-900 shadow-lg hover:bg-yellow-500 transition rounded-lg"
            >
              <img src={userIcon} alt="User Icon" className="w-4 sm:w-5 mr-2" />
              <strong>Login</strong>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
