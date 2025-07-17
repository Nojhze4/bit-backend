import { Router } from 'express';
import gamesController from '../controllers/games.js';
import accessoryController from '../controllers/accessory.js';
import consoleController from '../controllers/console.js';

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  try {
    const [games, accessories, consoles] = await Promise.all([
      gamesController.readAll({ ...req }, { ...res, json: (data) => data }),
      accessoryController.readAll({ ...req }, { ...res, json: (data) => data }),
      consoleController.readAll({ ...req }, { ...res, json: (data) => data }),
    ]);

    let products = [
      ...(games?.data || []),
      ...(accessories?.data || []),
      ...(consoles?.data || []),
    ];
    products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      allOK: true,
      message: "Productos obtenidos exitosamente",
      data: products,
    });
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    res.status(500).json({
      allOK: false,
      message: "Error al obtener productos",
      data: error.message,
    });
  }
});

productsRouter.get("/games", (req, res) => gamesController.readAll(req, res));
productsRouter.get("/accessories", (req, res) => accessoryController.readAll(req, res));
productsRouter.get("/consoles", (req, res) => consoleController.readAll(req, res));

productsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let found = false;
    await gamesController.readOne({ params: { id } }, {
      ...res,
      json: (data) => {
        if (data?.data) {
          found = true;
          res.json(data);
        }
      }
    });
    if (found) return;

    await accessoryController.readOne({ params: { id } }, {
      ...res,
      json: (data) => {
        if (data?.data) {
          found = true;
          res.json(data);
        }
      }
    });
    if (found) return;

    await consoleController.readOne({ params: { id } }, {
      ...res,
      json: (data) => {
        if (data?.data) {
          found = true;
          res.json(data);
        }
      }
    });
    if (found) return;

    res.status(404).json({
      allOK: false,
      message: "Producto no encontrado",
      data: null,
    });
  } catch (error) {
    console.error("Error buscando producto:", error);
    res.status(500).json({
      allOK: false,
      message: "Error al buscar producto",
      data: error.message,
    });
  }
});

export default productsRouter; 