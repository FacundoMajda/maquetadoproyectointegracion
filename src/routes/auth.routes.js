//Rutas relacionada con autenticacion
import { Router } from "express";

//importamos funciones de auth.controller.js
import { login, register } from "../controllers/aut.controller.js";
import userModel from "../models/user.model.js";

//Se crea el enrutador
const router = Router();

router.post("/register", (req, res) => {});

router.post("/login", async (req, res) => {
  //   console.log(req.body);

  await userModel.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  res.json({ success: true });
});

export default router;
