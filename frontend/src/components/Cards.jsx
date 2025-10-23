import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cards({ item }) {
  const navigate = useNavigate();

  const handleBuyNow = async () => {
    try {
      
      const response = await axios.post('http://localhost:4002/api/payment/create-order', {
        amount: item.price,
        currency: 'INR', 
      });

      const order = response.data;

      
      const options = {
        key: "rzp_test_LMel9T8nDR5usK", 
        amount: order.amount,
        currency: order.currency,
        name: 'Bookstore Payment',
        description: 'Payment for books',
        order_id: order.id,
        handler: function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: 'Mushahid Khan',
          email: 'khanmushahid0204@gmail.com',  
        },
        notes: {
          address: 'Address for delivery',
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error('Error during payment creation:', error);
    }
  };

  
      const userDetails = JSON.parse(localStorage.getItem("users"))
    

  const handlePaymentSuccess = async (response) => {
    const { payment_id, order_id, signature } = response;

    

    
    const orderData = {
      userName: userDetails.fullname,   
      email: userDetails.email,
      bookName: item.name,  
      price: item.price,
     
    };

     console.log(orderData)
    

    try {
      
      const result = await axios.post('http://localhost:4002/api/orders/verify-payment',orderData);
      alert(result.data);
        
    } catch (error) {
      console.error('Error during payment verification:', error?.response?.data?.error);
    }
  };

  return (
    <div className='card-actions justify-evenly transition-transform duration-300 transform hover:scale-105 hover:shadow-lg justify-between'>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={item.image}
            alt="Book"
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹{item.price}</div>
            <div
              className="badge badge-outline hover:bg-pink-500 p-3 duration-200 hover:text-white animate-bounce animate-infinity cursor-pointer"
              onClick={handleBuyNow}
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

