import { Router } from "express";
import { createUserSessionController, getUserSessionsController } from "../controllers/userSession.controller";

const router = Router();

router.get("/users/:id", getUserSessionsController);

router.post("/users/:id", createUserSessionController);

export { router as userSessionRouter}