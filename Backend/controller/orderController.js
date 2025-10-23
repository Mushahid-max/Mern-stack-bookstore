

import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { saveOrderDetails } from './orderService.js'; // Import function
import Order from '../model/Order.js';

dotenv.config();

const router = express.Router();

// Initialize Razorpay instance with credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Endpoint to create Razorpay order
export const createOrder = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: currency || 'INR',
      receipt: `receipt_${new Date().getTime()}`,
    });

    res.status(200).json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error.message);
    res.status(500).json({ error: 'Error creating Razorpay order' });
  }
};

export const verifyPayment = async (req, res) => {
  console.log("verifying")
  try {
    const { userName, email, bookName, price } = req.body;

    if (!userName || !email || !bookName || !price) {
      return res.status(400).json({ error: 'Missing required payment details' });
    }

    console.log('Payment Verified Successfully');

    const newOrder = new Order({
      email,
      userName,
      bookName,
      price,
    });
    
    await newOrder.save();
    
    res.status(200).json({ message: 'Payment verification successful.' });

  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ error: 'Error verifying payment' });
  }
};


