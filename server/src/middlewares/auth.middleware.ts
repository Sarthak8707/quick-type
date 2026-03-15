import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../config/env";
import { AppError } from "../utils/appError";



export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    try{
        
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            throw new AppError("Authentication Required", 401);
        }
        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
        
        req.user = {id: decode.id};

        next();
    }
    catch(err){
        console.log(err);
    }
}