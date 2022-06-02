import User from "../models/User";
import UserModel from "../models/User";
import { userReq } from "../types";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken";

const createUser = asyncHandler(async (req: userReq, res: any) => {
  const userExist = await UserModel.findOne({ email: req.body.email });
  if (userExist) {
    return res.status(409).json({ message: "User already exists" });
  }
  const user = await User.create(req.body);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json({ message: "User not created" });
  }
});

const authUser = asyncHandler(async (req: any, res: any) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  if (user && (await user.comparePassword(password))) {
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days,
    });
    res.json({ ...user._doc, token: token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export { createUser, authUser };
