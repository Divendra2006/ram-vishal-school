import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="relative">
        <img
          src="your-banner-image-url.jpg" // Replace with your banner image URL
          alt="School Banner"
          className="w-full h-[926px] object-cover"
        />
        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-300 text-3xl font-bold">
          The School That Cares
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4">
        {/* Left Side: Paragraph */}
        <div className="flex-1 p-4">
          <p className="text-lg text-gray-700">
            Welcome to our school, where we prioritize the holistic development
            of every child. Our dedicated staff and innovative programs ensure
            that each student receives the support they need to thrive both
            academically and personally. Join us in creating a nurturing
            environment that fosters growth and success!
          </p>
        </div>

        {/* Right Side: Image Below Banner */}
        <div className="w-full md:w-1/3 flex justify-center p-4">
          <img
            src="your-right-image-url.jpg" // Replace with your right image URL
            alt="Right Image"
            className="w-full h-auto max-w-[816px] max-h-[1005px] object-cover"
          />
        </div>
      </div>

      {/* Additional Image and Chairman's Note */}
      <div className="flex flex-col md:flex-row justify-center mb-4">
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <img
            src="your-left-image-url.jpg" // Replace with your left image URL
            alt="Left Image"
            className="w-full h-auto max-w-[816px] max-h-[1005px] object-cover"
          />
        </div>
        <div className="flex-1 p-4 md:w-2/3 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2">Message from the Chairman</h2>
          <p className="text-lg text-gray-700">
            Our school is committed to providing a holistic educational experience
            that nurtures each student’s unique talents and abilities. We believe
            in fostering a supportive environment where students can grow, learn,
            and thrive. With a focus on academic excellence and character development,
            we prepare our students for the challenges and opportunities of the future.
          </p>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="max-w-6xl mx-auto p-4">
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700">
          "Education is the key to unlocking your potential. It empowers you to think critically, explore new ideas, and challenge the status quo. Remember, every setback is an opportunity for growth. Embrace your journey with curiosity and resilience. Surround yourself with those who inspire you and push you to be your best. Each day is a chance to learn something new, to take a step closer to your dreams. Believe in yourself and your abilities. The future is shaped by your actions today. Go forth with confidence, knowing that you have the power to make a difference in the world." 
          <cite className="block mt-2 text-right">— Nelson Mandela</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
