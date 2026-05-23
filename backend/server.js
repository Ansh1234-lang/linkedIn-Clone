import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();



app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;
console.log(URI)
const start = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

start();