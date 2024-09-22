import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [profile, setProfile] = useState(null); // State to track selected profile (teacher/student)

  const handleProfileSelect = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">Login</h1>

        {/* Profile Selection */}
        {!profile && (
          <div>
            <p className="text-xl text-center mb-6 font-semibold">Select Your Profile:</p>
            <div className="flex justify-around mb-12">
              {/* Teacher Avatar */}
              <div
                onClick={() => handleProfileSelect('teacher')}
                className="cursor-pointer text-center hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="https://via.placeholder.com/120" // Placeholder image, replace with actual teacher avatar
                  alt="Teacher Avatar"
                  className="w-28 h-28 mx-auto mb-3 rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-200"
                />
                <p className="font-semibold text-lg">Teacher</p>
              </div>

              {/* Student Avatar */}
              <div
                onClick={() => handleProfileSelect('student')}
                className="cursor-pointer text-center hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="https://via.placeholder.com/120" // Placeholder image, replace with actual student avatar
                  alt="Student Avatar"
                  className="w-28 h-28 mx-auto mb-3 rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-200"
                />
                <p className="font-semibold text-lg">Student</p>
              </div>
            </div>
          </div>
        )}

        {/* Login Form */}
        {profile && (
          <div>
            <p className="text-xl text-center mb-8 font-bold text-gray-700">Login as {profile.charAt(0).toUpperCase() + profile.slice(1)}</p>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-medium text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md">
                Login
              </button>
            </form>

            {/* Option to change profile */}
            <div className="text-center mt-6">
              <button onClick={() => setProfile(null)} className="text-orange-500 underline font-medium hover:text-orange-600">
                Switch Profile
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-base">
                Don't have an account?{' '}
                <Link to="/signup" className="text-orange-500 underline font-semibold hover:text-orange-600">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
