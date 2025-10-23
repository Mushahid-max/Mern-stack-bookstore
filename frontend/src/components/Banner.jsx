import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { assets } from "../assets/assets";
import 'animate.css';

function Banner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); 
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-20">
        
        <div className="w-1/2 mt-32 space-y-10">
          <h1
            className={`text-4xl font-bold ${
              animate ? "animate__animated animate__fadeInLeft animate_" : ""
            }`}
          >
            Hello, Welcome here to learn something{" "}
            <span className=" text-pink-500">new everyday!!</span>
          </h1>
          <p
            className={`text-xl font font-bold ${
              animate ? "animate__animated animate__fadeInLeft" : ""
            }`}
          >
            "Discover a world of stories at Bookstore – where every page takes
            you on a new adventure. Find your next read today!"
          </p>
          <label
            className="input input-bordered flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-blue-50 hover:border-pink-500 focus-within:bg-pink-50 focus-within:border-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 transition-all duration-300 ease-in-out transform group-hover:scale-110"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow py-2 px-4 outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </label>

          <button
            className="px-8 z-30 py-4 bg-pink-400 rounded-full text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
          >
            Secondary
          </button>
        </div>

        {/* Right Section (Image) */}
        <div
          className={`w-1/2 ${animate ? "animate__animated animate__fadeInRight" : ""}`}
        >
          <img
            src={assets.banner}
            className="m-auto mt-20 mb-20 w-[500px] h-[500px] ml-20"
            alt="books image"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
