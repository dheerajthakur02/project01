import express from "express";
import {userRegister, userLogin, getAllUsers, updateUsers ,DeleteUserById, updateUsersByuserId,getUsersById,getUserByCustomId,filterUser} from "../controllers/userController.js";
const route = express.Router();
route.get("/all-users",getAllUsers)
route.post("/register",userRegister);
route.post("/login",userLogin);
route.put("/update/:_id", updateUsers);
route.put("/update-new/:userId", updateUsersByuserId);
route.delete("/delete/:_id",DeleteUserById)
route.get("/get-user-by-id/:_id",getUsersById);
route.get("/get-user-by-custom-id/:id",getUserByCustomId);
route.get("/get-user-by-filter",filterUser)
export default route;
