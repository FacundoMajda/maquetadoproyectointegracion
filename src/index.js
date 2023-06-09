//inicio del servidor
import app from "./app.js";
//import de funcion db
import { connectDB } from "./db.js";
//conectar db
connectDB();
//se inicia la escucha en el puerto:
app.listen(3000);
console.log("server listening on port 3000");
