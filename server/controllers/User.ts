import UserModel from "../models/User";
import asyncHandler from "express-async-handler";
import cloudinaryV2 from "../utils/cloudinary";

import { ImageDataReq } from "../types";

const updateUser = async (req: any, res: any) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req: any, res: any) => {
  try {
    let user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllUsers = asyncHandler(async (req: any, res: any) => {
  const users = await UserModel.find({});
  res.status(200).json(users);
});

const findUserByEmail = asyncHandler(async (req, res) => {
  const user = await UserModel.find({ email: req.body.email });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const uploadImage = asyncHandler(async (req: ImageDataReq, res: any) => {
  if (req.body.base64Image) {
    const uploadedImage = await cloudinaryV2.uploader.upload(
      req.body.base64Image,
      {
        upload_preset: "chat-app",
        folder: "chat-app/cover",
        cloud_name: "wanglee",
      }
    );
    res.json(uploadedImage);
  }
});

const searchUser = asyncHandler(async (req: any, res: any) => {
  let keyword;
  if (req.query.search) {
    keyword = {
      $or: [
        { username: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } },
      ],
    };
  } else {
    keyword = {};
  }
  const users = await UserModel.find(keyword);
  res.status(200).json(users);
});

export {
  getAllUsers,
  deleteUser,
  updateUser,
  uploadImage,
  findUserByEmail,
  searchUser,
};
