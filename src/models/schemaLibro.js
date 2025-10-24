// models/Libro.js
import mongoose from "mongoose";
import Autor from "./schemaAutor.js";

const { Schema, model } = mongoose;

const libroSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    idAutor: {
      type: Schema.Types.ObjectId, // Referencia a otro documento
      ref: "Autor",
      required: true,
    },
    anioPublicacion: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // crea createdAt y updatedAt automáticamente
    collection: "libro",
  }
);

// mongoose se encarga de crear el campo _id automáticamente
const Libro = model("Libro", libroSchema);

export default Libro;
