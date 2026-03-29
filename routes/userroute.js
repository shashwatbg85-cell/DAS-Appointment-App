import express from "express";
import { userLogin, userRegister } from "../controllers/usercontroller.js";

const router = express();

//Register || POST
router.post("/register",userRegister);

//LOGIN || POST
router.post("/login",userLogin);

export default router;