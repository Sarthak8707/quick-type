import jwt from "jsonwebtoken";
import { env } from "../config/env";

type inputToken = {
    id: number,
    username: string
}

export const signToken = (obj: inputToken) => {
    const signedToken = jwt.sign(obj, env.JWT_SECRET);
    return signedToken;
}