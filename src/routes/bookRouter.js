import express from "express";
import libroCtrl from "../services/ctrlLibro.js";

const router = express.Router();

router.get("/libros", libroCtrl.consultarLibros);

router.post("/libros", libroCtrl.agregarLibro);

router.get("/libros/:id", libroCtrl.buscarLibroPorId);

router.delete("/libros/:id", libroCtrl.eliminarLibro);

router.put("/libros/:id", libroCtrl.actualizarLibro);

export default router;
