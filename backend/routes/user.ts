import express, { Request, Response } from "express";
const router = express.Router();
import { prisma } from "../lib/prisma";
import getUser from "../lib/getUser";

router.get("/score", async (req: Request, res: Response) => {
    const user = await getUser(req.cookies) as {user_uid: string};
    if(!user){
        res.status(400).json({error: "This user doesn't exists"})
    }
    let score = 0;
    const defis = await prisma.user.findUnique({
        where: {
            user_uid: user.user_uid
        },
        select: {
            defis: { select: { point: true }}
        }
    })
    for (let i = 0; i < defis.defis.length; i++) {
        const defi = defis.defis[i];
        score += defi.point;
    }
    res.status(200).json({score: score})
})

router.get("/is_connected", async (req: Request, res: Response) => {
    const user = await getUser(req.cookies);
    if(!user){
        res.status(200).json({connected: false})
        return;
    }
    res.status(200).json({connected: true})
})

router.get("/info", async (req: Request, res: Response) => {
    const user = await getUser(req.cookies) as {user_uid: string, username: string, email: string, image_uid: string}
    if(!user){
        res.status(403).json({error: "you are not connected"})
        return;
    }
    const img = await prisma.image.findUnique({
        where: {
            image_uid: user.image_uid
        }
    })
    res.status(200).json({username: user.username, email: user.email, image: img?.image_name})
})

export default router;