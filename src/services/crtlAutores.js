import Libro from "../models/schemaLibro.js";
import AutorModel from "../models/schemaAutor.js";

//Función para agregar autores 
const agregarAutor = async (req, res) =>{
    try{
        const {nombres, apellidos, nacionalidad} = req.body;
        const nuevoAutor = new Libro({nombres,  apellidos, nacionalidad});
        await nuevoAutor.save();
        res.status(201).json(nuevoAutor);
    }catch (error){
    res.status(500).json({message: "Error al crear el libro", error})
    }
};

//Funcion los autores en la biblioteca
const consultarAutores = async (req, res) =>{
    try{

    }catch (error){
    res.status(500).json({message: "Error al crear el libro"})
}
}