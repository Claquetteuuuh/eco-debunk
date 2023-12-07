import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/auth";

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/auth", authRouter);

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT + "...");
})