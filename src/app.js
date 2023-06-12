import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
//Iniciamos app para posteriormente exportarlo

const app = express();
//Script dev definido en package.js
app.use(express.json());
app.use(morgan("dev"));

//
app.use(authRoutes);

// Export
export default app;
