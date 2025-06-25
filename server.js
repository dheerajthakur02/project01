import express from "express";
import userRoute from "./routes/userRoute.js"
import bookingRoute from "./routes/bookingRoute.js"
import mongoose from "mongoose";
import connectDB from "./db.js";
import dotenv from "dotenv";
dotenv.config();


const app=express();
app.use(express.json());
connectDB();


app.use("/api",userRoute);
app.use("/api",bookingRoute);

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
      console.log(`server is running on port ${PORT} `)
});