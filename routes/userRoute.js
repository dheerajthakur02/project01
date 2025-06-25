import express from "express";
import {userRegister, userLogin, getAllUsers, updateUsers ,DeleteUserById, updateUsersByuserId} from "../controllers/userController.js";
const route = express.Router();
route.get("/all",getAllUsers)
route.post("/register",userRegister);
route.post("/login",userLogin);
route.put("/update/:_id", updateUsers);
route.put("/update-new/:userId", updateUsersByuserId);
route.delete("/delete/:_id",DeleteUserById)
export default route;
