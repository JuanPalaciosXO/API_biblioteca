import Libro from "../models/schemaLibro.js";
import { libroSchema, libroUpdateSchema } from "../validations/libroValidation.js";

//Funcion para Agregar libros a la biblioteca
const agregarLibro = async (req, res) => {
  try {
    const { error } = libroSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { titulo, idAutor, anioPublicacion } = req.body;
    const nuevoLibro = new Libro({ titulo, idAutor, anioPublicacion });
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el libro", error });
  }
};

//Funcion para Consultar los libros de la biblioteca
const consultarLibros = async (req, res) => {
  try {
    const librosBdD = await Libro.find().populate("idAutor");
    console.error(`esto retorno la busqueda de los libros ::: ${librosBdD}`);
    res.json(librosBdD);
  } catch (error) {
    console.log(`Error al consultar los libros :: ${error}`);
    res.status(500).json({
      message: "Error al consultar los libros ::",
      error: error.message,
    });
  }
};

//Funcion para buscar un libro por id
const buscarLibroPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const librosBdD = await Libro.findById(id).populate("idAutor");
    res.json(librosBdD);
  } catch (error) {
    console.log(`Error al consultar los libros :: ${error}`);
    res
      .status(500)
      .json({ message: "Error al consultar los libros ::", error });
  }
};

// const libroBorrado = await Libro.findByIdAndDelete(id);
const eliminarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libroBorrado = await Libro.deleteOne({ _id: id });
    if (libroBorrado.deletedCount > 0) {
      res.json({
        libro: libroBorrado,
        mensaje: "El Libro fue eliminado",
      });
    }
  } catch (error) {
    console.log(`Error al eliminar el libro :: ${error}`);
    res.status(500).json({ message: "Error al eliminar el libro", error });
  }
};

const actualizarLibro = async (req, res) => {
  try {
    const { error } = libroUpdateSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    
    const { id } = req.params;
    const data = req.body;
    const cantAct = await Libro.updateOne({ _id: id }, { $set: data });
    if (cantAct.matchedCount == 0) {
      res.json({
        mensaje: "El Libro no se encontro",
      });
    }

    res.json({
      cantAct,
      mensaje: "El Libro fue actualizado correctamente",
    });
  } catch (error) {
    console.log(`Error al actualizar el libro :: ${error}`);
    res.status(500).json({ message: "Error al actualizar el libro", error });
  }
};

export default {
  consultarLibros,
  buscarLibroPorId,
  agregarLibro,
  eliminarLibro,
  actualizarLibro,
};
