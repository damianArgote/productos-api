import Producto from "../models/Producto.js";
import productos from "./productos.js";
import db from "../config/db.js";

const importarDatos = async () => {
  try {
    await db.authenticate();
    await db.sync();

    await Producto.bulkCreate(productos);
    console.log("Datos importados correctamente");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importarDatos();
}
