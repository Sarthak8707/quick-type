import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { sessions, words } from "../db/schema";
import { CreateUserSessionInput, GetUserSessionInput } from "./types"
 


export const createUserSessionService = async (sessionData: CreateUserSessionInput) => {
   // const {wordsID, userID, wpm, accuracy} = input;
    await db.insert(sessions).values(sessionData);
    
    return true;
}

export const getUserSessionService = async ({userID}: GetUserSessionInput) => {

    const userSessions = await db.select({id: sessions.id, 
        wpm: sessions.id,
        accuracy: sessions.accuracy,
        difficulty: words.difficulty
    })
    .from(sessions)
    .innerJoin(words, eq(sessions.wordsID, words.id))
    .where(eq(sessions.userID, userID));
    return userSessions;

}