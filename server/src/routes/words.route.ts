import { Router } from "express";
import { wordsController } from "../controllers/words.controller";

const router = Router();

router.get("/:difficulty", wordsController);


export {router as wordsRouter}
