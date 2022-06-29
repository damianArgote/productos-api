import { check, validationResult } from "express-validator";
import Producto from "../models/Producto.js";

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    return res.status(200).json(productos);
  } catch (error) {
    return res.status(500).json({ error: "Hubo un error" });
  }
};

const postProducto = async (req, res) => {
  try {
    await check("nombre")
      .notEmpty()
      .withMessage("El campo nombre es obligatorio")
      .run(req);

    await check("codigo")
      .notEmpty()
      .withMessage("El campo codigo es obligatorio")
      .run(req);

    await check("vencimiento")
      .notEmpty()
      .withMessage("El campo vencimiento es obligatorio")
      .run(req);

    let result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json(result.array());
    }

    await Producto.create(req.body);
    return res.status(201).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Hubo un error" });
  }
};

const putProducto = async (req, res) => {
  try {
    await check("nombre")
      .notEmpty()
      .withMessage("El campo nombre es obligatorio")
      .run(req);

    await check("codigo")
      .notEmpty()
      .withMessage("El campo codigo es obligatorio")
      .run(req);

    await check("vencimiento")
      .notEmpty()
      .withMessage("El campo vencimiento es obligatorio")
      .run(req);

    let result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json(result.array());
    }

    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await Producto.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.json({ error: "Hubo un error" });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await Producto.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Hubo un error" });
  }
};

export { getProductos, postProducto, putProducto, deleteProducto };
