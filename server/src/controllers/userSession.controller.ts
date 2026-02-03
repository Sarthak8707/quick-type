import { Request, Response, NextFunction } from "express";

export const getUserSessionsController = async (req: Request, res: Response, next: NextFunction) => {
    const userID = req.params.id;
    try{
        const data=null;
        return res.status(200).json(data);
    }
    catch(err){
        console.log(err)
    }
}

export const createUserSessionController = async (req: Request, res: Response, next:NextFunction) => {
    try{
       // const userID = req.user.id;
        const {wordsID, wpm, accuracy} = req.body;
       // const session = await createUserSessionService({userID, wordsID, wpm, accuracy});
       return res.status(201).json({msg: "Created"});
    }
    catch(err){
        console.log(err);
    }
}