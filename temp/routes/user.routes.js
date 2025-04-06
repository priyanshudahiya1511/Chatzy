import express from "express";
import protectRoute from "../middleware/privateRoute.js";
import getUsersForSidebar from "../controllers/users.controller.js";

const router = express.Router();

router.get("/",protectRoute,getUsersForSidebar);


export default router;