import express from "express";
const router = express.Router();

import jwtVerify from "../middlewares/authMiddleware";

import { createChat } from "../controllers/Chat";

router.route("/create").post(jwtVerify, createChat);

export default router;
