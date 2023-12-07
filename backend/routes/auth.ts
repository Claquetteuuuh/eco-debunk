import express, { Request, Response } from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import { decodeJWT, encodeJWT } from "../lib/encryption";
import { prisma } from "../lib/prisma";

router.get("/user", (req: Request, res: Response) => {
    res.status(200).json({message: "Quoicoubeh"})
})

router.post("/login", async (req: Request, res: Response) => {
    const encryptedBody = req.body.info;
    const {body} = decodeJWT(encryptedBody) as {body: {email: string, password: string}}
    const {email, password} = body;
    const account = await prisma.user.findUnique({where: {email: email}});
    if(!account){
        res.status(400).json({ error: "One of the informations is not good"});
        return;
    }
    const hashedPassword = account.password;
    const same = await bcrypt.compare(password, hashedPassword);
    if(!same){
        res.status(400).json({ error: "One of the informations is not good"})
        return;
    }
    const encodedUserID = encodeJWT(account.user_uid);

    res.status(200).cookie("eco_debunk_auth", encodedUserID as string, {maxAge: 1 * 24 * 3600 * 1000, httpOnly: true} ).json({ message: "Connected successfully"})
})

router.post("/signup", async (req: Request, res: Response) => {
    const encryptedBody = req.body.info;
    const {body} = decodeJWT(encryptedBody) as {body: {email: string, username: string, password: string}}
    const {email, password, username} = body;
    const account = await prisma.user.findUnique({where: {email: email}});
    if(account){
        res.status(400).json({error: "This account already exists !"})
    }
    console.log(password)
    const hashedPasswd = await bcrypt.hash(password, 10);
    console.log(hashedPasswd)
    const thisAccount = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPasswd,
        }
    })
    if(!thisAccount){
        res.status(400).json({ error: "An error occured while creating the account !"})
    }
    res.status(201).json({ message: "account created"});
})

export default router;