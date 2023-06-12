import User from "../models/user.model.js";

//Import JSON Web Token - Para token de autenticacion para cada User
import jwt from "jsonwebtoken";

//import para hashear contraseña de los usuarios
import bcrypt from "bcryptjs";

//Funciones para procesar peticiones
//Funcion register
export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    //crear el usuario
    const newUser = new User({
      username,
      password,
      email: passwordHash,
    });

    //Devolver el usuario
    const userSaved = await newUser.save();

    jwt.sign(
      { id: userSaved.id },
      "secret123",
      {
        expiresIn: "Id",
      },
      (err, token) => {
        if (err) console.error(err);
        res.json(token);
      }
    );
    // res.json({
    //   id: userSaved.id,
    //   username: userSaved.username,
    //   email: userSaved.email,
    //   created_at: userSaved.created,
    //   updated_at: userSaved.updated,
    // });
  } catch (error) {
    console.log(error);
  }
};

//Funcion login
export const login = (req, res) => res.send("login");
