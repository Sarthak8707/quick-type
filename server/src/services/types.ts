import { Session } from "../db/schema";

 export type CreateUserSessionInput = Pick<Session, "userID" | "wordsID" | "wpm" | "accuracy">


 export type GetUserSessionInput = Pick<Session, "userID">
