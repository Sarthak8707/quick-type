import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { words } from "../db/schema";
import { GetWordsInput } from "./types";

export const wordsService = async ({difficulty}: GetWordsInput) => {

    const result = await db.select().from(words).where(eq(words.difficulty, difficulty));
    return result;
    
}