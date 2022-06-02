import jwt from "jsonwebtoken";
import UserModel from "../models/User";
import asyncHandler from "express-async-handler";

const jwtVerify = asyncHandler(async (req: any, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
        iat: number;
        exp: number;
      };
      req.user = await UserModel.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token is invalid" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Please provide token" });
  }
});

export default jwtVerify;
