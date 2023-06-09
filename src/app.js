import express from "express";

//funcionalidad para registrar todas las peticiones con un mensaje por consola
//'node run dev'
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.listen(3000);
console.log("server listening on port 3000");

export default app;