import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/userroute.js";
import paymentRoute from "./route/payment.route.js";
import orderRoute from "./route/orderRoutes.js"; 

const app = express();

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4002;
const URI = process.env.MongoDBURI;

// Enable CORS for all origins
app.use(cors());
app.use(express.json()); // Ensure JSON body parsing

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Debug MongoDB connection errors
mongoose.connection.on("error", (err) => {
  console.error("MongoDB Connection Error:", err);
});

// Route definitions
app.use("/Book", bookRoute);
app.use("/users", userRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/orders", orderRoute);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
