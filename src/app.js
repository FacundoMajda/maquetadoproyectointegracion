import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

//Iniciamos app para posteriormente exportarlo
const app = express();

//Script dev definido en package.js
app.use(morgan("dev"));

//Uso de metodo json, para convertir los req.body en .json
app.use(express.json());

//Llamamos a authroutes, importado arriba
//Todas las rutas de authroutes empiezan con /api
app.use("/api", authRoutes);

// Export
export default app;
