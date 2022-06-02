import express from "express";
const router = express.Router();

import {
  uploadImage,
  findUserByEmail,
  updateUser,
  getAllUsers,
  searchUser,
} from "../controllers/User";
import jwtVerify from "../middlewares/authMiddleware";

router.post("/upload/image", uploadImage);
router.post("/findUser/email", findUserByEmail);
router.post("/updateUser/:id", updateUser);
router.route("/getAll").get(jwtVerify, getAllUsers);
router.route("/").get(jwtVerify, searchUser);

export default router;
