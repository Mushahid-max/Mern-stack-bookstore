import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ".//Course.css"

function Course() {
  const [book, setBook] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/Book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();

   
    setAnimate(true);
  }, []);

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 ${animate ? 'fade-in' : ''}`}>
      <div className='m-28 items-center justify-center text-center'>
        <h1 className='text-3xl font-bold'>
          We're delighted to have you <span className='text-pink-500'>here! :)</span>
        </h1>
        <p className='m-12 text-1xl font-bold'>
          "Welcome to Bookstore, your gateway to countless stories and knowledge. Explore a vast collection of free and premium books, tailored for every reader. Dive into genres that captivate your imagination and broaden your horizons. Whether you're seeking adventure, romance, or wisdom, there's something for everyone. Join our community of book lovers and start your reading journey today. Unlock the joy of reading with Bookstore – your next favorite book is just a click away!"
        </p>
        <Link to='/'>
          <button className="px-8 z-30 py-4 bg-pink-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 mb-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
