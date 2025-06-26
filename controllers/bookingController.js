import mongoose from "mongoose";
import Bookings from "../models/bookings.js";

export const createBookings = async(req,res)=>{
     const {initialDest , finalDest,bookedBy,bookingAmount}= req.body;
     try {
      //  let booking= await Bookings.findOne({bookingNumber});
      //  if(booking){
      //   return res.status(500).json({message:"Booking is already initiated"});
      //  }
       const booking= new Bookings({
       initialDest,
       finalDest,
       bookedBy,
       bookingAmount
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
    const { id } = req.params;
    const {initialDest, finalDest} = req.body;
    try {
      const booking = await Bookings.findOneAndUpdate({ id }, {initialDest,finalDest}, {new: true})
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

export const getBookingsByfilter= async(req,res)=>{
       const {initialDest,finalDest}=req.query;
       try {
         let filter={};

         if(initialDest){
          filter.initialDest = new RegExp(initialDest,"i");
         }

         if(finalDest){
            filter.finalDest = new RegExp(finalDest,"i");
         }

         const bookings = await Bookings.find(filter);
         
          if(!bookings){
           return res.status(404).json({message:"Booking not found"})
          }
         
           return res.status(200).json({message:"Booking details", bookings})
       } catch (error) {
         return res.status(500).json({message:"Internal error"})
       }

}

export const filterBookingsByDate = async (req,res) =>{
        const {startDate, endDate}= req.query;
        try {
             let filter={};
             if(startDate && endDate){
               const start= new Date(`${startDate} 00:00:00`);
               const end= new Date(`${endDate} 23:59:59`);
               filter.createdAt = {
                 $gte:start,
                 $lte:end
               };
             }
            const bookings = await Bookings.find(filter);
            if(!bookings){
                return res.status(404).json({message:"Booking not found"})
            }
            return res.status(200).json({message:"Booking details", bookings})
        } catch (error) {
        return res.status(500).json({message:"Internal error"})
        }
}