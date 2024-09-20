import React from 'react'
import {NavLink,Link} from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* School Logo */}
        <div className="flex items-center space-x-10">
          <img
            src="your-school-logo-url.png" // Replace with your logo URL
            alt="School Logo"
            className="w-12 h-12 mr-2"
          />
          <span className="ml-1 text-xl text-pretty font-bold">Shri Ram Vishal Singh Shrimati Ramdhani devi Inter College</span>
        </div>

        {/* Middle Navigation Links */}
        <nav className="flex justify-center space-x-6">
          <NavLink
            to=""
            className={({ isActive }) =>
              `block py-2  pr-4 pl-3 text-2xl duration-200 ${
                isActive ? "text-orange-700" : "text-gray-900"
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 text-2xl duration-200 ${
                isActive ? "text-orange-700" : "text-gray-900"
              } hover:text-orange-700 hover:font-bold`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3  text-2xl duration-200 ${
                isActive ? "text-orange-700" : "text-gray-900"
              } hover:text-orange-700 hover:font-bold`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Login & Signup Links */}
        <div className="ml-16 flex space-x-4 ">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block py-2 px-4 text-2xl duration-200 border border-transparent hover:border-gray-300 hover:bg-white ${
                isActive ? "text-orange-700" : "text-gray-900"
              } hover:text-orange-700 rounded-lg hover:font-bold`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `block py-2 px-4 text-2xl duration-200 border border-transparent hover:border-gray-300 hover:bg-white ${
                isActive ? "text-orange-700" : "text-gray-900"
              } hover:text-orange-700 rounded-lg hover:font-bold`
            }
          >
            Signup
          </NavLink>
        
        </div>
      </div>
    </header>
  );
    
}

export default Header