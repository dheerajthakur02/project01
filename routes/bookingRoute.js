import express from "express";
import { createBookings, updateBookings,getAllBookings, deleteBookings,getBookingById,getBookingsByfilter,filterBookingsByDate } from "../controllers/bookingController.js";
const route = express.Router();

route.post("/make-bookings", createBookings);
route.get("/all-bookings",getAllBookings);
route.put("/update-bookings/:bookingId",updateBookings);
route.delete("/deleteById/:_id",deleteBookings);
route.get("/get-bookings-by-user/:_id",getBookingById);
route.get("/get-bookings-by-filter",getBookingsByfilter);
route.get("/get-bookings-by-filter-date",filterBookingsByDate);

export default route;
