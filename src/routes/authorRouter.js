import express from "express";
import autorCrtl from "../services/crtlAutores.js";

const router = express.Router();

router.post("/autores", autorCrtl.agregarAutor);

router.get("/autores", autorCrtl.consultarAutores);

router.put("/autores/:id", autorCrtl.actualizarAutor);

router.delete("/autores/:id", autorCrtl.eliminarAutor);

export default router;