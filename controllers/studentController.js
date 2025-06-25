import student from "../models/student.js";
import Student from "../models/student.js";
export const studentRegister = async (req,res)=>{
    const {name ,regNumber, email, phone, city, password, subjects}= req.body;
    try {
        const existingStudent = await Student.findOne({regNumber});
        if(existingStudent){
          return res.status(404).json({
            message:"Student already existed"
          })
        } 
        const student = new Student({
            name,
            regNumber,
            email,
            phone,
            city,
            password,
            subjects
        });
        await student.save();
        return res.status(201).json({
            message:"Student registeration done successfully",
            student
        })  
    } catch (error) {
        res.status(500).json({
            message:"Server error",
            error:error.message,
        })
    }
}

export const studentLogin = async (req,res)=>{
    const {regNumber,password}= req.body;
    try {
        const student = await Student.findOne({regNumber});
        if(!student){
          return res.status(404).json({
            message:"student not found, please register first"
          })
        } 
        if(password==student.password){
          return res.status(200).json({
            message:"logged in successfully",
            student
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

export const getAllStudents = async (req,res) =>{
      try {
        const students= await Student.find();
      if(!students){
         return res.status(200).json({message:"The student list is empty"});
      }
      return res.status(200).json({
         message:"all students",
         students
      })
      } catch (error) {
          return res.status(500).json({message:"Internal error"})
      }
     
}

export const updateStudentsDetails= async (req,res)=>{
      const { id }= req.params;
      const {name,phone} = req.body;
      try{
       const student=await Student.findOneAndUpdate({ id } ,{name, phone}, {new:true});
       res.status(200).json({message: "student data updated successfully", student});  
      }catch(error){
        return res.status(500).json({message:"Internal error"})
      }
}  

export const DeleteStudentById = async (req,res)=>{
    const { id }= req.params;
    try{
        await Student.findOneAndDelete({id});
        res.status(200).json({message: "Student data deleted successfully"})  
    }catch(err){
      return res.status(500).json({message:"Internal error"})
    }
}

export const getStudentById = async(req,res)=>{
  const { id}=req.params;
    try {
      const student = await Student.findOne({ id });
      if(!student){
        return res.status(404).json({message:"Student data is not found"})
      }
      return res.status(200).json({
        message:"Student details",
        student
      })
    } catch (error) {
      return res.status(500).json({message:"Internal error"})
    }
}