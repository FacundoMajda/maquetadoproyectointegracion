import express from "express";

//funcionalidad para registrar todas las peticiones con un mensaje por consola
//'node run dev'
//auto-reconnect
import morgan from "morgan";

//import de rutas
import authRoutes from "./routes/auth.routes.js";

const app = express();
//llamamos uso de morgan para mostrar los request por consola
app.use(morgan("dev"));

//para convertir los requestbody de los request en formato json
app.use(express.json());
//llamamos authroutes

//definimos que todas las rutas de authroutes van a iniciar con /api/{route}
app.use("/api", authRoutes);

//exportamos app
// Configura las rutas y middleware aquí
export default app;
