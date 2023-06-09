import { Router } from "express";
//importamos las funciones de registro y login
import { login, register } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

export default router;
