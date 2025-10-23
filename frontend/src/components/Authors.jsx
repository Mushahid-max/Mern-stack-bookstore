import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './Authors.css'; 

const authors = [
  {
    Author: "Jane Austen",
    Book: "Story Book",
    quote: "There is no charm equal to tenderness of heart."
  },
  {
    Author: "William chef",
    Book: "Cooking Book",
    quote: "All the world’s a stage, and all the men and women merely players."
  },
  {
    Author: "Mark Twain",
    Book: "Comics Book",
    quote: "The secret of getting ahead is getting started."
  },
  {
    Author: "Virginia Woolf",
    Book: "Discovery Book",
    quote: "A self that goes on changing is a self that goes on living."
  },
  {
    Author: "Charles Dickens",
    Book: "Cartoon Book",
    quote: "It was the best of times, it was the worst of times."
  },
  {
    Author: "George Orwell",
    Book: "Programming Book",
    quote: "In a time of deceit, telling the truth is a revolutionary act."
  },
  {
    Author: "J.K. Rowling",
    Book: "Book",
    quote: "It is our choices that show what we truly are, far more than our abilities."
  },
  {
    Author: "Ernest Hemingway",
    Book: "Romance Book",
    quote: "Courage is grace under pressure."
  },
  {
    Author: "Maya Angelou",
    Book: "Mystery Book",
    quote: "If you don't like something, change it. If you can't change it, change your attitude."
  },
  {
    Author: "Leo Tolstoy",
    Book: "Science Fiction Book",
    quote: "Everyone thinks of changing the world, but no one thinks of changing himself."
  },
  {
    Author: "F. Scott Fitzgerald",
    Book: "Travel Book",
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past."
  },
  {
    Author: "Agatha Christie",
    Book: "History Book",
    quote: "The best time for planning a book is while you’re doing the dishes."
  }
];

function Authors() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    
    setAnimate(true);
  }, []);

  const handleExploreNow = () => {
    navigate('/'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`bg-white text-gray-800 ${animate ? 'animate-fadeIn' : ''}`}>
      {/* Navbar */}
      <Navbar />

      {/* Authors Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-pink-500">
          Famous Authors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-black border-2 border-transparent hover:border-pink-500 hover:ring-4 hover:ring-pink-300 running-border"
            >
              <h3 className="text-xl font-bold text-pink-500 mb-4">{author.Author}</h3>
              <p className="text-gray-700 hover:text-white"><strong>Book:</strong> {author.Book}</p>
              <p className="text-gray-700 hover:text-white mt-2"><strong>Quote:</strong> "{author.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-white-500 text-black py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Inspired by These Authors?
          </h3>
          <p className="text-lg mb-6">
            Explore their books and discover your next favorite read.
          </p>
          <button 
            onClick={handleExploreNow} 
            className="px-8 z-30 py-4 bg-pink-400 rounded-full text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
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

export default Authors;
