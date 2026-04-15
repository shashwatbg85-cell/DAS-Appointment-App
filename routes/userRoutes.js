import express from "express";
import {
  getAllUsers,
  getLoginUser,
  getStats,
  getUserDetails,
  updatePassword,
  updateUser,
  userLogin,
  userRegister,
} from "../controllers/userControllers.js";
import { isAdmin, userAuth } from "../middlewares/authMiddlewares.js";
import upload from "../middlewares/multer.js";

const router = express();

//REGISTER || POST
router.post("/register", userRegister);

//LOGIN || POST
router.post("/login", userLogin);

// USER UPDATE DETAILES ||PATCH
router.patch("/update/:id", userAuth, upload.single("image"), updateUser);

//UPDATE PASSWORD || PATCH
router.patch("/update-password/:id", userAuth, updatePassword);

//GET ALL USERS || GET
router.get("/get-all", userAuth, isAdmin, getAllUsers);

//GET STATS || GET
router.get("/get-stats", userAuth, isAdmin, getStats);

//GET USERS APPOINTMENT DETAILS || GET
router.get("/get-user/:id", userAuth, isAdmin, getUserDetails);

//GET LOGIN USERS DETAILS || GET
router.get("/get-login-user/:id", userAuth, getLoginUser);

export default router;
