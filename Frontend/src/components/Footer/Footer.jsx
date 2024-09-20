import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Footer() {
  const [schoolInfo, setSchoolInfo] = useState({
    location: '',
    email: '',
    contactNo: '',
  });

  useEffect(() => {
    // Fetch school information from the API
    const fetchSchoolInfo = async () => {
      try {
        const response = await fetch('https://api.example.com/school-info'); // Replace with your API endpoint
        const data = await response.json();
        setSchoolInfo({
          location: data.location,
          email: data.email,
          contactNo: data.contactNo,
        });
      } catch (error) {
        console.error('Error fetching school info:', error);
      }
    };

    fetchSchoolInfo();
  }, []);

  return (
    <footer className="bg-gray-600 text-white p-6">
      <div className="max-w-6xl mx-auto flex justify-between">
        {/* Left Section: School Name and Info */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img
              src="your-school-logo-url.png" // Replace with your logo URL
              alt="School Logo"
              className="w-12 h-12 mr-2"
            />
            <span className="text-2xl text-pretty">Shri Ram Vishal Singh Shrimati Ramdhani devi Inter College</span>
          </div>
          <div className="flex flex-col mt-2 space-y-2">
            <span>Location: {schoolInfo.location}</span>
            <span>Email: {schoolInfo.email}</span>
            <span>Contact No: {schoolInfo.contactNo}</span>
          </div>
        </div>

        {/* Middle Section: Admission Link */}
        <div className="flex items-center justify-center">
          <Link to="/admission" className="text-lg font-semibold hover:underline">
            Admission
          </Link>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex flex-col pt-16">
          <Link to="/terms" className="hover:underline mb-2">Terms and Conditions</Link>
          <Link to="" className="hover:underline mb-2">Home</Link>
          <Link to="/about" className="hover:underline mb-2">About</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer