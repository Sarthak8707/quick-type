import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.route';
import { userSessionRouter } from './routes/userSession.route';
import { wordsRouter } from './routes/words.route';
import { db } from './db/client';
import { sessions, words } from './db/schema';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/sessions", userSessionRouter);
app.use("/words", wordsRouter);

// db.insert(words).values({words: "tell now", difficulty: "easy"}).then(() => {
//     console.log("Db insertion done successfully");
// })

app.listen(3000, () => {
    console.log("Server Started")
})



