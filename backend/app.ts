import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/auth";
import defisRouter from "./routes/defis";
import userRouter from "./routes/user";
import postRouter from "./routes/post"

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/auth", authRouter);
app.use("/api/defis", defisRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT + "...");
})