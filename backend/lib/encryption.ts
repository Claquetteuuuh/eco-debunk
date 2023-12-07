import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export const decodeJWT = (token: string) => {
    const jwt_key = process.env.FRONT_KEY;
    if(!jwt_key){
        return;
    }
    const decoded = jwt.verify(token, jwt_key);
    return decoded;
}

export const encodeJWT = (text: string) => {
    const jwt_key = process.env.BACK_KEY;
    if(!jwt_key){
        return;
    }
    const encoded = jwt.sign(text, jwt_key);
    return encoded;
}