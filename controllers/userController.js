import bookings from "../models/bookings.js";
import User from "../models/user.js";
import Bookings from "../models/user.js";
export const userRegister = async (req,res)=>{
    const {name , email, phone, password, userId}= req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
          return res.status(404).json({
            message:"User already existed"
          })
        } 
        const user = new User({
            name,
            email,
            phone,
            password,
            userId
        });
        await user.save();
        return res.status(201).json({
            message:"User registered successfully",
            user
        })  
    } catch (error) {
        res.status(500).json({
            message:"Server error",
            error:error.message,
        })
    }
}

export const userLogin = async (req,res)=>{
    const {email,password}= req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
          return res.status(404).json({
            message:"User not found, please register first"
          })
        } 
        if(password==user.password){
          return res.status(200).json({
            message:"logged in successfully",
            user
        })
        }else
        {
          return res.status(404).json({
            message:"incorrect password",
        })  
        }
    } catch (error) {
        res.status(500).json({
            message:"Server error",
            error:error.message,
        })
    }
}

export const getAllUsers = async (req,res) =>{
      try {
        const users= await User.find();
      if(!users){
         return res.status(200).json({message: "The user is empty"});
      }
      return res.status(200).json({
         message:"all users",
         users
      })
      } catch (error) {
          return res.status(500).json({message:"Internal error"})
      }
     
}

export const updateUsers= async (req,res)=>{
      const { _id }= req.params;
      const {name} = req.body;
      try{
      const user = await User.findByIdAndUpdate(_id,{name}, {new:true})

        res.status(200).json({message: "User data updated successfully", user})   
      }catch(error){
        return res.status(500).json({message:"Internal error"})
      }
}  

export const updateUsersByuserId= async (req,res)=>{
      const { userId }= req.params;
      const { name } = req.body;
      try{
      const user = await User.findOneAndUpdate({ userId },{name}, {new:true})

        res.status(200).json({message: "User data updated successfully", user})   
      }catch(error){
        return res.status(500).json({message:"Internal error", error: error.message})
      }
} 

export const DeleteUserById = async (req,res)=>{
    const { _id }= req.params;
    try{
        await User.findByIdAndDelete(_id);
        res.status(200).json({message: "User data deleted successfully"})  
    }catch(err){
      return res.status(500).json({message:"Internal error"})
    }
}

export const getUsersById =async(req,res)=>{
      const {_id}=req.params;
      try {
         const user= await User.findById(_id);
         if(!user){
             return res.status(404).json({message:"User not found"});
         }
         return res.status(200).json({message:"Users data",user})
      } catch (error) {
        return res.status(500).json({message:"Internal error"})
      }
}

export const getUserByCustomId = async(req,res)=>{
         const { id }= req.params;
         try {
             const user= await User.findOne({ id });
             if(!user){
               return res.status(404).json({message:"user not found"});
             }
             return res.status(200).json({message:"users data", user})
         } catch (error) {
          return res.status(500).json({message:"Internal error"})
         }
}

//filter users using using query params
export const filterUser = async(req,res)=>{
        const {name, email, startDate, endDate}=req.query;
        try {
          let filter={};
          if(name){
              filter.name = new RegExp(name, "i"); 
          }
          if(email){
               filter.email = email;
          }

          if(startDate && endDate)
          {
            const start = new Date(`${startDate} 00:00:00`)
            const end = new Date(`${endDate} 23:59:59`)
            filter.createdAt = {
              $gte: start,
              $lte: end
            };
          }

          //filter by date can also be done by this way, but check the minutes using console.log()
          //  if(startDate && endDate)
          // {
          //   filter.createdAt = {
          //     $gte: new Date(startDate),
          //     $lte: new Date(endDate)
          //   };
          // }
          const user = await User.find(filter);

          return res.status(200).json({message:"users data", user})
        } catch (error) {
          return res.status(500).json({message:"Internal error"})
        }
}