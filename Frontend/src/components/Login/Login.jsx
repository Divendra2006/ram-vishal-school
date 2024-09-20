import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  const [profile, setProfile] = useState(null); // State to track selected profile (teacher/student)
  
  const handleProfileSelect = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        
        {/* Profile Selection */}
        {!profile && (
          <div>
            <p className="text-lg text-center mb-4">Select Your Profile:</p>
            <div className="flex justify-around mb-8">
              {/* Teacher Avatar */}
              <div
                onClick={() => handleProfileSelect('teacher')}
                className="cursor-pointer text-center"
              >
                <img
                  src="https://via.placeholder.com/100" // Placeholder image, replace with actual teacher avatar
                  alt="Teacher Avatar"
                  className="w-24 h-24 mx-auto mb-2 rounded-full"
                />
                <p className="font-semibold">Teacher</p>
              </div>

              {/* Student Avatar */}
              <div
                onClick={() => handleProfileSelect('student')}
                className="cursor-pointer text-center"
              >
                <img
                  src="https://via.placeholder.com/100" // Placeholder image, replace with actual student avatar
                  alt="Student Avatar"
                  className="w-24 h-24 mx-auto mb-2 rounded-full"
                />
                <p className="font-semibold">Student</p>
              </div>
            </div>
          </div>
        )}

        {/* Login Form */}
        {profile && (
          <div>
            <p className="text-lg text-center mb-6">Login as {profile.charAt(0).toUpperCase() + profile.slice(1)}</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-lg">
                Login
              </button>
            </form>

            {/* Option to change profile */}
            <div className="text-center mt-4">
              <button onClick={() => setProfile(null)} className="text-orange-500 underline">
                Switch Profile
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-sm">
                Don't have an account?{' '}
                <Link to="/Signup" className="text-orange-500 underline">
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
