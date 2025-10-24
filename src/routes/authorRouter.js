import express from "express";
import ctrlLibro from "../services/ctrlLibro";

const router = express.Router();

router.post("/autores", agregarAutor);

router.get("/autores", consultarAutores);

router.put("/autores/:id", actualizarAutor);

router.delete("/autores/:id", eliminarAutor);

export default router;