import React from "react";
import teamImage from "../Images/Logo.png";
import missionIcon from "../Images/Logo.png";
import visionIcon from "../Images/Logo.png";
import valuesIcon from "../Images/Logo.png";

function About() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
          About <span className="text-gray-900">Us</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Discover our story, mission, and the values that drive us forward.
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[11rem]">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  className="w-full"
>
  <path
    fill="#ffffff"
    d="M0,64L40,80C80,96,160,128,240,128C320,128,400,96,480,112C560,128,640,192,720,197.3C800,203,880,149,960,128C1040,107,1120,117,1200,144C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
  ></path>
</svg>

        </div>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <img src={missionIcon} alt="Mission Icon" className="w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To revolutionize how people experience food delivery with reliability
            and quality.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <img src={visionIcon} alt="Vision Icon" className="w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become the global leader in connecting food enthusiasts with their
            favorite meals.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
          <img src={valuesIcon} alt="Values Icon" className="w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-600">
            Integrity, innovation, and a relentless pursuit of excellence.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:flex md:items-center">
          <div className="md:w-1/2">
            <img
              src={teamImage}
              alt="Team"
              className="rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 mb-4">
              We are a group of passionate individuals dedicated to providing the
              best food experiences. Together, we work tirelessly to innovate and
              bring smiles to our customers.
            </p>
            <a
              href="#team"
              className="inline-block bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-orange-600 transform transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-4xl font-extrabold">Ready to Join Our Journey?</h2>
        <p className="mt-4 text-lg">
          Be a part of a community that believes in creating delightful food
          experiences.
        </p>
        <a
          href="#"
          className="mt-6 inline-block bg-orange-500 py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:bg-orange-600 transform transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default About;
