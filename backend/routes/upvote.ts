import express, { Request, Response } from "express";
const router = express.Router();
import { prisma } from "../lib/prisma";
import getUser from "../lib/getUser";

router.post("/:id/add", async (req: Request, res: Response) => {
    const user = await getUser(req.cookies);
    if(!user){
        res.status(403).json({error: "You're not connected"});
        return;
    }
    const { id } = req.params;
    const post = await prisma.post.findUnique({
        where: {
            post_uid: id
        },
        select: {
            upvotes: {select: {user: {select: {user_uid: true}}}}
        }
    })
    if(!post){
        res.status(404).json({error: "Post not found"})
        return;
    }
    for (let i = 0; i < post.upvotes.length; i++) {
        const upvote = post.upvotes[i];
        if(upvote.user.user_uid == user.user_uid){
            res.status(400).json({error: "UPVOTE already exists"})
            return;
        }
    }
    const upvote = await prisma.upvote.create({
        data: {
            post_uid: id,
            user_uid: user.user_uid
        }
    })
    if(!upvote){
        res.status(400).json({error: "error in insertion"})
        return;
    }
    res.status(201).json(upvote)
})

router.delete("/:id/delete", async (req: Request, res: Response) => {
    const user = await getUser(req.cookies);
    if(!user){
        res.status(403).json({error: "You're not connected"});
        return;
    }
    const { id } = req.params;
    const post = await prisma.post.findUnique({
        where: {
            post_uid: id
        },
        select: {
            upvotes: {select: {user: {select: {user_uid: true}}}}
        }
    })
    if(!post){
        res.status(404).json({error: "Post not found"})
        return;
    }
    const upvote = await prisma.upvote.findMany({
        where: {
            post_uid: id,
            user_uid: user.user_uid,
        }
    })
    if(!upvote){
        res.status(404).json({error: "l'upvote n'existe pas"})
        return;
    }
    const del = await prisma.upvote.deleteMany({
        where: {
            post_uid: id,
            user_uid: user.user_uid
        }
    })
    if(!del){
        res.status(400).json({error: "error in deleting"})
        return;
    }
    res.status(200).json({message: "Upvote deleted successfully"})
})

export default router;