import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import multer from 'multer'
import { uploadFile } from "../lib/bucket";
const upload = multer({ storage: multer.memoryStorage() })
dotenv.config();
const router = express.Router();

router.post("/new", upload.single("file"), async (req: Request, res: Response) => {
    const contentType = req.headers["Content-Type"];
    const bucketName = process.env.BUCKET_NAME;
    const fileName = `${uuidv4()}.jpg`;

    const file = req.file;
    if(!file){
        res.status(400).json({error: "Any file specified"})
        return;
    }
    const bytes = file.buffer;
    const fileContent = Buffer.from(bytes)

    if(bucketName){
        await uploadFile(
            bucketName,
            fileName,
            fileContent,
            contentType? contentType as string: "image/png",
        )
        console.log(fileName)
    }
})

export default router;
