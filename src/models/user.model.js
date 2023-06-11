//especificacion a mongo db de como guardar los datos
//esquema
//funcion para crear estructura

import mongoose from "mongoose";

//definimos y exportamos esquema de usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//exportamos
export default mongoose.model("User", userSchema);
