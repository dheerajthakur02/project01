import mongoose from "mongoose";
import Bookings from "../models/bookings.js";

export const createBookings = async(req,res)=>{
     const {bookingNumber, initialDest , finalDest, booking_by}= req.body;
     try {
       let booking= await Bookings.findOne({bookingNumber});
       if(booking){
        return res.status(500).json({message:"Booking is already initiated"});
       }
       booking= new Bookings({
       bookingNumber, initialDest , finalDest ,booking_by
     })
      await booking.save();
      return res.status(201).json({message:"Booking done successfully", booking})
     } catch (error) {
        return res.status(500).json({message:"Internal error"})
     }
     
}
export const getAllBookings = async(req,res)=>{
    try{
       const bookings= await Bookings.find();
       if(!bookings){
         return res.status(404).json({message:"Booking list is empty"})
       }
       return res.status(200).json({message:"All bookings", bookings})
    }catch(err){
       return res.status(500).json({message:"Internal error"})
    }
}

export const updateBookings = async(req,res)=>{
    const { _id } = req.params;
    const {initialDest, finalDest} = req.body;
    try {
      const booking = await Bookings.findByIdAndUpdate({ _id }, {initialDest,finalDest}, {new: true})
      return res.status(200).json({message:"Booking updated successfully", booking})
    } catch (error) {
        return res.status(500).json({message:"Internal error"})
    }
}

export const deleteBookings = async(req,res) =>{
       const { _id } = req.params;
       try {
          await Bookings.findByIdAndDelete(_id );
          return res.status(200).json({message:"Booking deleted successfully"})
       } catch (error) {
        return res.status(500).json({message:"Internal error"})
       }
}

export const getBookingById = async(req,res)=>{
   const {_id}=req.params;
   try {
        const booking = await Bookings.findById(_id);
        if(!booking){
           return res.status(404).json({message:"Booking not found"})
        }
        return res.status(200).json({message:"Booking details", booking})
   } catch (error) {
      return res.status(500).json({message:"Internal error"})
   }
}