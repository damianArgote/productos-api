import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import productosRoutes from "./routes/productosRoutes.js";
dotenv.config({ path: ".env" });
const app = express();

try {
  await db.authenticate();
  await db.sync();
  console.log("Conectado a la base de datos.");
} catch (error) {
  console.error("Error de conexion:", error);
}
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/api/v1/productos", productosRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Servidor funcionando en puerto ${process.env.PORT}`)
);
