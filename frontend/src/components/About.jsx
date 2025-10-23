import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './About.css'; 

function About() {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate('/');
  };

  return (
    <div className="bg-white text-gray-800">
     
      <Navbar />

     
      <div className="max-w-6xl mx-auto px-6 py-12 fade-in"> 
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-pink-500">
          ABOUT US!
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          At <span className="font-bold">Bookstore</span>, we believe in the power of stories and knowledge. Our platform offers a diverse range of books, from timeless classics to the latest releases, ensuring there’s something for everyone.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          Whether you're here for free reads or exclusive paid content, our mission is to make literature and learning accessible to all. We’ve carefully curated our collection to cater to book lovers, students, and knowledge seekers.
        </p>
        <p className="text-lg text-gray-700 text-center">
          With a user-friendly design, secure payment gateways, and personalized recommendations, <span className="font-bold">Bookstore</span> ensures a seamless and delightful experience for all its users.
        </p>

       
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Why Choose <span className="text-pink-500">Bookstore</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-black fade-in-up ">
              <h4 className="text-xl font-bold text-pink-500 mb-4 ">Vast Collection</h4>
              <p className="text-gray-700 hover:text-white">
                Explore a diverse library of books spanning multiple genres and categories.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-black fade-in-up">
              <h4 className="text-xl font-bold text-pink-500 mb-4">Affordable Prices</h4>
              <p className="text-gray-700 hover:text-white">
                Enjoy competitive pricing with special deals and discounts on paid content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-black fade-in-up">
              <h4 className="text-xl font-bold text-pink-500 mb-4">User-Friendly Interface</h4>
              <p className="text-gray-700 hover:text-white">
                Navigate effortlessly with a clean, modern design tailored for a smooth experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-white-500 text-black py-8">
        <div className="max-w-6xl mx-auto px-6 text-center fade-in-up">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Dive into the World of Books?
          </h3>
          <p className="text-lg mb-6">
            Join our community today and explore an ocean of knowledge and stories.
          </p>
          <button
            className="px-8 z-30 py-4 bg-pink-400 rounded-full text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
            onClick={handleExploreNow}
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
