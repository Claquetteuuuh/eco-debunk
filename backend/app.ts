import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/auth";
import defisRouter from "./routes/defis";
import userRouter from "./routes/user";
import postRouter from "./routes/post";
import upvoteRouter from "./routes/upvote";
import imageRouter from "./routes/images";
import multer from 'multer'
const upload = multer({dest: "uploads/"})
const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRouter);
app.use("/api/defis", defisRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/upvote", upvoteRouter);
app.use("/api/images", imageRouter);

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT + "...");
});
