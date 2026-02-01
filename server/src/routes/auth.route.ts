import { Router } from "express"
import { loginController, registerController } from "../controllers/auth.controller";


const router = Router();

// login route
router.post("/login", loginController);

// register route
router.post("/register", registerController);

export {router as authRouter}

