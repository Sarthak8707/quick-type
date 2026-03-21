import { Router } from "express";
import { createUserSessionController, getUserSessionsController } from "../controllers/userSession.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/users/:id", getUserSessionsController);

router.post("/users", authMiddleware, createUserSessionController);

export { router as userSessionRouter}