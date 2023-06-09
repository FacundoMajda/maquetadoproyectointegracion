//funcion para procesar peticiones, login y register
import User from "../models/user.model.js";

export const register = (req, res) => {
  const { email, password, username } = req.body;

  const newUser = new User(email, password, username);

  res.send("registrando");
};

export const login = (req, res) => res.send("login");
