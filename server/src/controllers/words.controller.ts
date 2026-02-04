import { Request, Response, NextFunction } from "express"
import { wordsService } from "../services/words.service";

export const wordsController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const difficulty = req.body.difficulty;
        const result = wordsService({difficulty});
        return res.status(200).json(result);
    }
    catch(err){
        console.log(err);
    }
}