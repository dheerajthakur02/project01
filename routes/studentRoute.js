import express from "express";
import { studentRegister,studentLogin, updateStudentsDetails, getAllStudents, DeleteStudentById ,getStudentById,getStudentsUsingFilter,updateStduentUsingFilter,newupdateStudentByCutomId} from "../controllers/studentController.js";

const route= express.Router();

route.post("/register-student",studentRegister);
route.post("/login-student",studentLogin);
route.put("/update-student/:id",updateStudentsDetails);
route.get("/get-all-students",getAllStudents);
route.delete("/delete-student/:id",DeleteStudentById);
route.get("/get-student-by-id/:id",getStudentById);
route.get("/get-student-by-filter",getStudentsUsingFilter);
route.put("/update-student-by-filter",updateStduentUsingFilter);
route.put("/update-using-custom/:newId",newupdateStudentByCutomId);


export default route;