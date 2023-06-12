//Index.js ejecuta el servidor, importando funcionalidad de app.js
import app from "./app.js";
//Import base de datos definida en db.js
import { connectDB } from "./db.js";

//Modulo nodemon para volver a iniciar el servidor automaticamente luego de cada cambio
import nodemon from "nodemon";

//Iniciamos la base de datos
connectDB();

//Modulo para iniciar servidor en puerto indicado
app.listen(4000);
console.log("listening on  port", 4000);
