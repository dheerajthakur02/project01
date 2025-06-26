import express from "express";
import { createBookings, updateBookings,getAllBookings, deleteBookings,getBookingById,getBookingsByfilter } from "../controllers/bookingController.js";
const route = express.Router();

route.post("/makeBooking", createBookings);
route.get("/allBookings",getAllBookings);
route.put("/updateBookings/:_id",updateBookings);
route.delete("/deleteById/:_id",deleteBookings);
route.get("/get-bookings-by-user/:_id",getBookingById);
route.get("/get-bookings-by-filter",getBookingsByfilter);

export default route;
