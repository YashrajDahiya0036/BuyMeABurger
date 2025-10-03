import mongoose from "mongoose";

let isConnected = false; // track connection across hot reloads

const connectDB = async () => {
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    isConnected = true;
    console.log("Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/buy-me-a-burger`);
    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Failed to connect to database");
  }
};

export default connectDB;
