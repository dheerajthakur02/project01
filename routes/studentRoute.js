import express from "express";
import { studentRegister,studentLogin, updateStudentsDetails, getAllStudents, DeleteStudentById ,getStudentById} from "../controllers/studentController.js";

const route= express.Router();

route.post("/register-student",studentRegister);
route.post("/login-student",studentLogin);
route.put("/update-student/:id",updateStudentsDetails);
route.get("/get-all-students",getAllStudents);
route.delete("/delete-student/:id",DeleteStudentById);
route.get("/get-student-by-id/:id",getStudentById);

export default route;