import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";

export const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:""
    },
    regNumber:{
        type:String,
        unique:true,
        required:true,
        default:""
    },
    email:{
        type:String,
        unique:true
    },
     newId:{
       type:String ,
       default: ()=>`student-${uuidv4()}`
    },
     password:{
        type:String,
        required:true,
        default: ""
    },
    phone:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    subjects:{
        type:[String],
        default:""
    },
},{timestamps:true})

export default mongoose.model("Student",StudentSchema)