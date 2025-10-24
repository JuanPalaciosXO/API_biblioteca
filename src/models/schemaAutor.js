// models/Autor.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const autorSchema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
      trim: true, // elimina espacios al inicio y final
    },
    apellidos: {
      type: String,
      required: true,
      trim: true,
    },
    nacionalidad: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // añade createdAt y updatedAt automáticamente
    collection: "autor",
  }
);

// Mongoose crea automáticamente un campo "_id" (ObjectId) para cada autor
const Autor = model("Autor", autorSchema);

export default Autor;
