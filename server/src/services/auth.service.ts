import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { users } from "../db/schema";
import { GetUserInput } from "./types";
import { AppError } from "../utils/appError";
import { comparePassword, hashPassword } from "../utils/password";
import { signToken } from "../utils/jwt";


export const loginService = async ({username, password}: GetUserInput) => {
    const [user] = await db.select().from(users).where(eq(users.username, username)).limit(1);
    if(!user){
        throw new AppError("Username or Password is Incorrect", 401);

    }
    //const hash= user.password;
    const isTrue = await comparePassword(password, user.password);

    if(!isTrue){
        throw new AppError("Username or Password is Incorrect", 401);
    }
    const id = user.id
    //const name = user.username;
    const token = signToken({id, username});
    return {token, user: username}

}

export const registerService = async ({username, password}: GetUserInput) => {
    const user = await db.select().from(users).where(eq(users.username, username));
    if(user.length){
        console.log(" USer::::", user.length);
        throw new AppError("User already exists", 409);
    }
    const hashedPassword = await hashPassword(password);
    await db.insert(users).values({username, password});
    return {username};
}