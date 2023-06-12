//Rutas relacionada con autenticacion
import { Router } from "express";

//Importamos funciones de auth.controller.js
//Funciones de Login y Register
import { login, register } from "../controllers/aut.controller.js";
import userModel from "../models/user.model.js";

//Se crea el enrutador, para crear multiples rutas
const router = Router();

//Seccion de creacion de rutas:
//Todas estas rutas empienzan con /api/route
router.post("/register", async (req, res) => {
  console.log(req.body);

  await userModel.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  // res.json({ success: true });
});

router.post("/login", async (req, res) => {
  console.log(req.body);

  await userModel.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  // res.json({ success: true });
});

export default router;
