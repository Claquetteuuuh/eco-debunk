import express, { Request, Response } from "express";
const router = express.Router();
import { decodeJWT, encodeJWT } from "../lib/encryption";
import { prisma } from "../lib/prisma";

router.get("/test", async (req: Request, res: Response) => {
    res.status(200).json({message: "test"})
})

export default router;