

import Order from '../model/Order.js'; 

export const saveOrderDetails = async (orderDetails) => {
  try {
    const newOrder = new Order(orderDetails);  // Save order in the database
    await newOrder.save();
    console.log('Order saved successfully:', newOrder);
  } catch (error) {
    console.error('Error saving order:', error);
    throw error;  // Throw error so it can be handled
  }
};

