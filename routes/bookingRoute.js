import express from "express";
import { createBookings, updateBookings,getAllBookings, deleteBookings } from "../controllers/bookingController.js";
const route = express.Router();

route.post("/makeBooking", createBookings);
route.get("/allBookings",getAllBookings);
route.put("/updateBookings/:_id",updateBookings);
route.delete("/deleteById/:_id",deleteBookings);

export default route;
