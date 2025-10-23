
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();


const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, //  Razorpay Test Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Razorpay Test Key Secret
});


export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;  
    
    const options = {
      amount: amount * 100,  
      currency: 'INR',
      receipt: 'order_rcptid_11',  
    };

    const order = await razorpay.orders.create(options);
    
    res.status(200).json(order);  // Return the order details
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).send('Error creating order');
  }
};
