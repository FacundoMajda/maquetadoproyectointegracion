import express from "express";

//funcionalidad para registrar todas las peticiones con un mensaje por consola
//'node run dev'
import morgan from "morgan";


//import de rutas
import authRoutes from "./routes/auth.routes.js"

const app = express();

app.use(morgan("dev"));

app.use(authRoutes);

export default app;