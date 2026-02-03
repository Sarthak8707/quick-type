import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

const difficultyEnum = pgEnum("difficulty", ["easy", "medium", "hard"]);


// schema for database

// users schema

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

// words schema

export const words = pgTable("words", {
  id: serial("id").primaryKey(),
  words: text("words").notNull(),
  difficulty: difficultyEnum("difficulty").notNull()
})

// session schema

export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  difficulty: difficultyEnum("difficulty").notNull(),
  wordsID: integer("words_id").notNull().references(() => words.id, {
    onDelete: "cascade", onUpdate: "cascade"
  }),
  wpm: integer("wpm").notNull(),
  totalWords: integer("total_words").notNull(),
  accuracy: integer("accuracy").notNull(),
  userID: integer("user_id").notNull().references(() => users.id, {
    onDelete: "cascade", onUpdate: "cascade"
  })

})

