import { DataTypes } from "sequelize";
import db from "../config/db.js";
const Producto = db.define("productos", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vencimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Producto;
