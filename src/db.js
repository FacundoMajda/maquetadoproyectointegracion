//npm i mongoose

import mongoose from 'mongoose';

//se exporta script para conectar a la base de datos
export const connectDB = async () => { 
    
    try {
        await mongoose.connect("mongodb://localhost/merndb");
        console.log("db connected");
    }
    catch (error)   {  
        console.log(error);

    }


}