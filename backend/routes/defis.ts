import express, { Request, Response } from "express";
const router = express.Router();
import { prisma } from "../lib/prisma";
import getUser from "../lib/getUser";


router.get("/fetch_today", async (req: Request, res: Response) => {
    const today = new Date();
    const defisRendered = [];
    const defis = await prisma.defis.findMany()
    for (let i = 0; i < defis.length; i++) {
        const defi = defis[i];
        if(defi.date.getDay() == today.getDay()){
            defisRendered.push(defi)
        }
    }
    res.status(200).json(defisRendered);
})

router.get("/fetch_accomplied", async (req: Request, res: Response) => {
    const user = await getUser(req.cookies) as {user_uid: string};
    if(!user){
        res.status(400).json({error: "This user doesn't exists"})
        return;
    }
    const defis = await prisma.user.findMany({
        where: {
            user_uid: user.user_uid
        },
        select: {
            defis: true
        }
    })
    res.status(200).json(defis)
})

export default router;