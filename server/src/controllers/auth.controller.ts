import { Request, Response, NextFunction } from "express";
import { loginService, registerService } from "../services/auth.service";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    
    try{
       const {username, password} = req.body;
        
       const result = await loginService({username, password});
       const token = result.token;
       const user = result.user;

       return res.status(200).json({"token": token, "user": user});
    }
    catch(err){
        next(err);
    }
}

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {username, password} = req.body;
        const result = await registerService({username, password});
        return res.status(201).json({msg: "Successfully Created"});
    }
    catch(err){
        next(err);
    }
}