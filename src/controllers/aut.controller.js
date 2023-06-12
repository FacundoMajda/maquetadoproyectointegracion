import User from "../models/user.model.js";

//Funciones para procesar peticiones
//Funcion register
export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    //crear el usuario
    const newUser = new User({
      username,
      password,
      email,
    });

    //devolver el usuario
    const userSaved = await newUser.save();
    res.json(userSaved);
  } catch (error) {
    console.log(error);
  }
};

//Funcion login
export const login = (req, res) => res.send("login");
