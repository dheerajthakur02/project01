import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid"
const BookingSchema=new mongoose.Schema({
   bookingId:{
        type:String,
        default: ()=> `id-${uuidv4()}`
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
   },
   bookedBy:{
        type:String,
        required:true,
   },
   bookingAmount:{
       type:Number,
       required:true
   }
},{timestamps:true})
export default mongoose.model("Booking",BookingSchema);
