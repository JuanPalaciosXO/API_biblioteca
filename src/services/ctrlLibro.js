import Libro from "../models/schemaLibro.js";
import { libroSchema, libroUpdateSchema } from "../validations/libroValidation.js";

//Crear libro
const agregarLibro = async (req, res) => {
  try {
    const { error } = libroSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { titulo, autor, genero, anioPublicacion } = req.body;
    const nuevoLibro = new Libro({ titulo, autor, genero, anioPublicacion });
    await nuevoLibro.save();

    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el libro", error });
  }
};

//Consultar todos los libros
const consultarLibros = async (req, res) => {
  try {
    const librosBdd = await Libro.find();
    console.error(`Esto retornó la búsqueda de los libros ::: ${librosBdd}`);
    res.json(librosBdd);
  } catch (error) {
    console.log(`Error al consultar los libros :: ${error}`);
    res.status(500).json({
      message: "Error al consultar los libros",
      error: error.message,
    });
  }
};

//Consultar libro por ID
const buscarLibroPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const libroBdd = await Libro.findById(id);

    if (!libroBdd) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.json(libroBdd);
  } catch (error) {
    console.log(`Error al consultar el libro :: ${error}`);
    res.status(500).json({ message: "Error al consultar el libro", error });
  }
};

//Eliminar libro
const eliminarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libroBorrado = await Libro.deleteOne({ _id: id });

    if (libroBorrado.deletedCount === 0) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    console.log(`Error al eliminar el libro :: ${error}`);
    res.status(500).json({ message: "Error al eliminar el libro", error });
  }
};

//Actualizar libro
const actualizarLibro = async (req, res) => {
  try {
    const { error } = libroUpdateSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { id } = req.params;
    const { titulo, autor, genero, anioPublicacion } = req.body;

    const libroActualizado = await Libro.updateOne(
      { _id: id },
      { titulo, autor, genero, anioPublicacion },
      { new: true }
    );

    if (libroActualizado.matchedCount === 0) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.status(200).json({ message: "Libro actualizado correctamente" });
  } catch (error) {
    console.log(`Error al actualizar el libro :: ${error}`);
    res.status(500).json({ message: "Error al actualizar el libro", error });
  }
};

export default {
  agregarLibro,
  consultarLibros,
  buscarLibroPorId,
  eliminarLibro,
  actualizarLibro,
};
