import { Request, Response, NextFunction } from "express"
import { wordsService } from "../services/words.service";

type Difficulty = "easy" | "medium" | "hard";

export const wordsController = async (req: Request<{difficulty: Difficulty}> , res: Response, next: NextFunction) => {
    try{
        const difficulty = req.params.difficulty;
        const result = await wordsService({difficulty});
        return res.status(200).json(result);
    }
    catch(err){
        console.log(err);
    }
}