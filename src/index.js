//inicio del servidor

import app from "./app.js";

import { connectDB } from "./db.js";

connectDB();
app.listen(3000);
console.log("server listening on port 3000");
