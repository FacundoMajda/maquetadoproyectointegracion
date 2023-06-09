import express from "express";

//funcionalidad para registrar todas las peticiones con un mensaje por consola
//'node run dev'
import morgan from "morgan";

//import de rutas
import authRoutes from "./routes/auth.routes.js";

const app = express();
//llamamos uso de morgan para mostrar los request por consola
app.use(morgan("dev"));
//llamamos authroutes
app.use(authRoutes);

//exportamos app

export default app;
