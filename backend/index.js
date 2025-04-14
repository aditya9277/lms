import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import userRoute from "./route/userRoute.js";
import bookRoute from "./route/bookRoute.js";
const app = express();


// ✅ CORS Setup
const corsOptions = {
  origin: ['https://page-pilot-g90.vercel.app'],
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ Extra CORS Headers (For stubborn hosts like Render)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://page-pilot-g90.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
const mongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB server started successfully!`);
  } catch (err) {
    throw err;
  }
};

// MIDDLEWARES.
app.use(express.json()); // To validate json objects.
app.use("/user", userRoute); // user routes.
app.use("/books", bookRoute); // book routes.

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
    status: err.status,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  mongo();
  console.log(`Port successfully started at ${PORT}`);
});
