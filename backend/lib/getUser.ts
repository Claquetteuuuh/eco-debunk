import { prisma } from "./prisma";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

const getUser = async (cookies) => {
    const token = cookies["eco_debunk_auth"];
    if(!process.env.BACK_KEY) return;
    const id = jwt.verify(token, process.env.BACK_KEY)
    const user = await prisma.user.findUnique({
        where: {
            user_uid: id as string
        }
    })
    if(!user){
        return false;
    }
    return user;
}

export default getUser;