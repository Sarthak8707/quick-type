import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { sessions } from "../db/schema";
import { CreateUserSessionInput, GetUserSessionInput } from "./types"
 


export const createUserSessionService = async (sessionData: CreateUserSessionInput) => {
   // const {wordsID, userID, wpm, accuracy} = input;
    await db.insert(sessions).values(sessionData);
    
    return true;
}

export const getUserSessionService = async ({userID}: GetUserSessionInput) => {

    const posts = await db.select().from(sessions).where(eq(sessions.userID, userID));
    return posts;
    
}