import express from "express";
const router = express.Router();

import jwtVerify from "../middlewares/authMiddleware";

import { accessChat, createGroupChat, getChatUsers } from "../controllers/Chat";

router.route("/create").post(jwtVerify, createGroupChat);
router.route("/").post(jwtVerify, accessChat);
router.route("/").get(jwtVerify, getChatUsers);

export default router;
