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
    autor: {
      type: String,
      required: true,
      trim: true,
    },
    genero: {
      type: String,
      required: true,
      trim: true,
    },
    anioPublicacion: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // crea createdAt y updatedAt automáticamente
    collection: "Libro",
  }
);

// mongoose se encarga de crear el campo _id automáticamente
const Libro = model("Libro", libroSchema);

export default Libro;
