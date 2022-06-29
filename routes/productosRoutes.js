import { Router } from "express";
import {
  getProductos,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controllers/productosController.js";

const router = Router();

router.get("/", getProductos);
router.post("/", postProducto);
router.put("/:id", putProducto);
router.delete("/:id", deleteProducto);

export default router;
