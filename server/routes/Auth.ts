import express from "express";
const router = express.Router();
import { createUser, authUser } from "../controllers/Auth";

router.post("/", createUser);
router.post("/login", authUser);
export default router;
