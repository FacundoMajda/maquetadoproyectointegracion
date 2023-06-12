import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
  },
  //Agregamos datos de fecha de creacion
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);

//
