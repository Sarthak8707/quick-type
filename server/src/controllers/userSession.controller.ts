import { Request, Response, NextFunction } from "express";
import { createUserSessionService, getUserSessionService } from "../services/userSession.service";

export const getUserSessionsController = async (req: Request, res: Response, next: NextFunction) => {
    const userID = Number(req.params.id);
    try{
        const data= await getUserSessionService({userID})
        return res.status(200).json(data);
    }
    catch(err){
        console.log(err)
    }
}

export const createUserSessionController = async (req: Request, res: Response, next:NextFunction) => {
    try{
        const userID = req.user.id;
        const {wordsID, wpm, accuracy} = req.body;
        const sessionData = {userID, wordsID, wpm, accuracy};
        const session = await createUserSessionService(sessionData);
       return res.status(201).json({msg: "Created"});
    }
    catch(err){
        console.log(err);
    }
}