import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

const app = express();

//Middlewares
app.use(morgan("dev"));

app.use(express.json());

//Todas las rutas de authroutes empiezan con /api
app.use("/api", authRoutes);

// Export
export default app;
