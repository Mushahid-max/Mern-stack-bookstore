

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
email: { type: String, required: true },
  userName: { type: String, required: true },
  bookName: { type: String, required: true },
  price: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order; 


