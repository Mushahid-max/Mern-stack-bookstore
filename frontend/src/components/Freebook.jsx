
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebook() {

  const[book,setBook]= useState([])
  useEffect(()=>{
    const getBook =async()=>{
      try{
     const res=  await axios .get("http://localhost:4002/Book");
    
     const data =res.data.filter((data) => data.categaory === "free")
     console.log(data)
     setBook(data);

      }catch(error) {

        console.log(error)
      }
    }
    getBook();

  },[])


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mt-auto mb-20 md:px-20 px-1'>
        <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
        <p>Explore a wide range of free and paid books!
Find hidden gems without spending, or grab premium reads at great prices.
Start building your dream library today!</p>
      </div>

      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
