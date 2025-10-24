import Libro from "../models/schemaLibro.js";
import AutorModel from "../models/schemaAutor.js";

//Función para agregar autores 
const agregarAutor = async (req, res) =>{
    try{
        const {nombres, apellidos, nacionalidad} = req.body;
        const nuevoAutor = new Autor({nombres,  apellidos, nacionalidad});
        await nuevoAutor.save();
        res.status(201).json(nuevoAutor);
    }catch (error){
    res.status(500).json({message: "Error al crear el libro", error})
  }
};

//Funcion los autores en la biblioteca
const consultarAutores = async (req, res) =>{
    try{
        const librosBdb = await Autor.find();
        console.error(`esto retorno la busqueda de los autores ::: ${librosBdD}`);
        res.json(librosBdb);

    }catch (error){
    console.log(`Error al consultar los autores :: ${error}`);
    res.status(500).json({
      message: "Error al consultar los autores ::",
      error: error.message,
    });
  }
};

//Funcion para borrar autores
const eliminarAutor = async (req, res) =>{
    try{
        const {id} =  req.params;
        const autorBorrado = await Autor.findByAndDelete(id);
        if (!autorBorrado) {
            return res.status(500).json({message: "Autor no encontrado"})
        }
        res.status(201).json({message: "Autor eliminado correctamente"})
    }catch (error) {
    console.log(`Error al eliminar el libro :: ${error}`);
    res.status(500).json({ message: "Error al eliminar el libro", error });
  }
};

//Funcion para actualizar autores
const actualizarAutor = async (req, res) =>{
    try{
        const {id} = req.params;
        const {nombres, apellidos, nacionalidad} = req.body;
        const autorActualizado = await Autor.findByAndUpdate(id,
            {nombres, apellidos, nacionalidad},
            {new: true}
    );
    if (!autorActualizado) {
       return res.status(500).json({message: "Autor no encontrado"}) 
    }
    res.status(201).json(autorActualizado);

    }catch (error) {
    console.log(`Error al actualizar el autor :: ${error}`);
    res.status(500).json({ message: "Error al actualizar el autor", error });
  }
};

export default{
    agregarAutor,
    consultarAutores,
    eliminarAutor,
    actualizarAutor
}