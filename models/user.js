import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";
const UserSchmea= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default: ""
    },
    id:{
       type:String ,
       default: ()=>`user-${uuidv4()}`
    },
    userId:{
        type:String,
        default: ""
    },
    email:{
        type:String,
        required:true,
        unique:true,
        default: ""
    },
    password:{
        type:String,
        required:true,
        default: ""
    },
    phone:{
        type:String,
        required:true,
        default: ""
    }
   
},{timestamps:true})
export default mongoose.model("User",UserSchmea);