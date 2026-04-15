import express from "express";
import { getTestContrller } from "../controllers/testcontroller.js";

//router object
const router = express.Router();

//router
router.get("/", getTestContrller);

export default router;
