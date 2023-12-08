import express, { Request, Response } from "express";
const router = express.Router();
import { prisma } from "../lib/prisma";
import getUser from "../lib/getUser";
import { decodeJWT } from "../lib/encryption";

router.get("/all_post", async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    select: {
      post_uid: true,
      author: { select: { username: true } },
      title: true,
      content: true,
      image: { select: { image_name: true } },
      _count: { select: { upvotes: true } },
    },
  });
  let renderedPosts = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    renderedPosts.push({
      post_uid: post.post_uid,
      author: post.author.username,
      title: post.title,
      content: post.content,
      image: post.image?.image_name,
      upvotes: post._count.upvotes,
    });
  }
  res.status(200).json(renderedPosts);
});

router.get("/my_post", async (req: Request, res: Response) => {
  const user = (await getUser(req.cookies)) as { user_uid: string };
    if(!user){
        res.status(403).json({error: "you are not connected"})
        return;
    }
  const posts = await prisma.post.findMany({
    where: {
      author_uid: user.user_uid,
    },
    select: {
        post_uid: true,
        author: {select: {username: true}},
        title: true,
        content: true,
        image: {select: {image_name: true}}
    }
  });
  let renderedPosts = []

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    renderedPosts.push({
        post_uid: post.post_uid,
        author: post.author.username,
        title: post.title,
        content: post.content,
        image: post.image?.image_name
    })
  }

  res.status(200).json(renderedPosts);
});

router.post("/create", async (req: Request, res: Response) => {
    const user = await getUser(req.cookies);
    if(!user){
        res.status(403).json({error: "Your not connected"})
        return;
    }

    const encryptedBody = req.body.info;
    const {body} = decodeJWT(encryptedBody) as {body: {title: string, content: string,}}
    const {title, content } = body;
    if(!title || !content ){
        res.status(400).json({error: "info not provided !"})
        return;
    }
    const post = await prisma.post.create({
        data: {
            author_uid: user.user_uid,
            title: title,
            content: content,
        }
    })
    if(!post){
        res.status(400).json({error: "Error when creating post"})
        return;
    }
    res.status(201).json(post);
})

export default router;
