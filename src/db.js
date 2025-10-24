// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Conectado a la BdD : ${mongoose.connection.name} en MongoDB Atlas`
    );
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); // Detiene la app si no se conecta
  }
};

export default connectDB;
