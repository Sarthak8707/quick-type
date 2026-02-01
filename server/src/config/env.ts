import 'dotenv/config';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});

export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  PORT: Number(process.env.PORT ?? 3000),
}

if (!env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}
