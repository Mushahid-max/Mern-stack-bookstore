import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { saveOrderDetails } from '../controller/orderService.js'; 

dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise
      currency: currency || 'INR', // Default to INR if no currency is provided
      receipt: `receipt_${new Date().getTime()}`,
    });

    res.status(200).json({
      message: 'Order created successfully',
      orderId: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error.stack);
    res.status(500).json({ error: 'Error creating Razorpay order' });
  }
});


export default router;
