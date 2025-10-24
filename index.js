import express from "express";
import "dotenv/config";
import connectDB from "./src/db.js";
import booksRouter from "./src/routes/bookRouter.js";

const app = express();
const port = process.env.PORT || 9000;

//** MIDDLEWARE */
app.use(express.json()); // Util para la conversiones de y a JSON
app.use("/api/v1", booksRouter); // Cuando se use un endpoint de libros se debe anteponer el segmento /api/v1

//** CONECTARSE A LA BdD */
connectDB();

//** RUTA PPAL */
app.get("/", (req, res) => {
  res.send(
    `<h3>El servidor corre por el puerto ${port} y esta funcionando OK</h3>`
  );
});

//** METODO PARA CONSTATAR LA CONEXION AL SERVIDOR */
app.listen(port, (req, res) => {
  console.log(`Servidor ejecutandose por el puerto : ${port}`);
});
