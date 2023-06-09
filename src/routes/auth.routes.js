import { Router } from "express";
import { login, register } from '../controllers/auth.controller.js';

const Router = Router()

router.post('/register', register)

router.post('/login', login)

export default router;