import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";
import bcrypt, { genSalt } from "bcryptjs";
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

UserSchmea.pre("save",  async function(next){
      if(!this.isModified("password"))
        return next();
      try {
        const salt =await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (error) {
          next(error);
      }
})


export default mongoose.model("User",UserSchmea);