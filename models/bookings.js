import mongoose from "mongoose";

const BookingSchema=new mongoose.Schema({
   bookingNumber:{
       type:String,
       required:true,
       default:""
   },
   initialDest:{
      type:String,
      required:true,
      default:""
   },
   finalDest:{
      type:String,
      required:true,
      default:""
   }
})
export default mongoose.model("Booking",BookingSchema);
