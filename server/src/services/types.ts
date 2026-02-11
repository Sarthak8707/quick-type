import { Session, Users, Words } from "../db/schema";

 export type CreateUserSessionInput = Pick<Session, "userID" | "wordsID" | "wpm" | "accuracy">

 export type GetUserSessionInput = Pick<Session, "userID">

 export type GetWordsInput = Pick<Words, "difficulty">

 export type GetUserInput = Pick<Users, "username" | "password">