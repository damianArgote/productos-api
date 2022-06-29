import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    define: {
      timestamps: true, //fecha y hora del registro
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, //tiempo no hubo actividad con la base daatos te desconecta
      idle: 10000, // si no hubo acticidad con la base de datos
    },
    operatorAliases: false,
  }
);

export default db;
