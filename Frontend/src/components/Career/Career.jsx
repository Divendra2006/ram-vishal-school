import React from 'react';

function Career(){
  const mentors = [
    {
      name: 'Divendra Yadav',
      email: 'divendrasinghyadaviit@gmail.com',
      post: 'Student at IIT BHU',
      photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
    },
    {
      name: 'Luxmi Yadav',
      email: 'bob.smith@example.com',
      post: 'Software Engineer',
      photo: 'https://via.placeholder.com/150', // Replace with actual photo URL
    },
  ];

  return (
    <div className="max-w-6xl mt-16 mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Career Mentors</h1>
      <h2 className='text-xl font-bold text-center mb-8' >Ask your any doubt related to your career through email</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mentors.map((mentor, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-36 h-36 rounded-full mx-auto mb-4"
            />
            <h2 className="text-3xl font-semibold mb-4">{mentor.name}</h2>
            <h3  className="text-xl font-semibold mb-3">{mentor.post}</h3>
            <p className="text-gray-600 font-semibold">✉️:{mentor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
