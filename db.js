import mongoose from "mongoose";
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL_LOCAL);
        console.log("MongoDB database connected successfully");
    }catch(err){
          console.log(err)
    }
     
}
export default connectDB;