import express from "express";
import { isAdmin, userAuth } from "../middlewares/authMiddlewares.js";
import {
  bookAppointment,
  cancelAppointment,
  getAllAppointmentDetails,
  getAllAppointments,
  getUserAppointmentDetails,
  getUserAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentsControllers.js";

const router = express.Router();

//CREATE || POST
router.post("/create", userAuth, bookAppointment);

//GET ALL APPOINTMENT || GET
router.get("/get-all", userAuth, isAdmin, getAllAppointments);

//GET DETAILS APPOINTMENT || GET
router.get("/get-details/:id", userAuth, getAllAppointmentDetails);

//UPDATE STATUS || PATCH
router.patch("/update-status/:id", userAuth, isAdmin, updateAppointmentStatus);

//GET ALL USER APPOINTMENT || GET
router.get("/get-user-appointment/:id", userAuth, getUserAppointments);

//GET USER APPOINTMENT DETAILS || GET
router.get(
  "/get-user-appointment-details/:id",
  userAuth,
  getUserAppointmentDetails,
);

//CANCEL USER APPOINTMENT || POST
router.post("/cancel/:id", userAuth, cancelAppointment);

export default router;
