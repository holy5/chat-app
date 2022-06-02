import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoute from "./routes/Auth";
import userRoute from "./routes/User";
import chatRoute from "./routes/Chat";

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://WangLee:VmWYiWczCKPZPjA8@cluster0.huhn4.mongodb.net/Chat?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use("/chat", chatRoute);
app.use("/auth", authRoute);
app.use("/account", userRoute);
