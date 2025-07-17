import { Router } from 'express';
import gamesController from '../controllers/games.js';
import multer from 'multer';

const gamesRouter = Router();

// Configuración de multer para guardar imágenes en /uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'image-' + uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Endpoint para subir imagen de juego
gamesRouter.post('/game-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ allOK: false, message: 'No se subió ninguna imagen' });
  }
  res.status(200).json({
    allOK: true,
    message: 'Imagen subida correctamente',
    imageUrl: `/uploads/${req.file.filename}`
  });
});

gamesRouter.post("/", gamesController.create);
gamesRouter.get("/", gamesController.readAll);
gamesRouter.get("/:id", gamesController.readOne);
gamesRouter.put("/:id", gamesController.update);
gamesRouter.delete("/:id", gamesController.delete);

gamesRouter.get("/console/:consola", gamesController.getByConsole);

gamesRouter.put("/updateWithoutId", gamesController.updateWithoutId);

gamesRouter.get("/genre/:genero", gamesController.getByGenre);

gamesRouter.get("/inStock", gamesController.getInStock);

gamesRouter.get("/multiplayer", gamesController.getMultiplayer);

gamesRouter.get("/recent", gamesController.getRecent);

gamesRouter.get("/search", gamesController.search);

gamesRouter.get("/developer/:developer", gamesController.getByDeveloper);

gamesRouter.get("/publisher/:publisher", gamesController.getByPublisher);

gamesRouter.get("/year/:releaseYear", gamesController.getByReleaseYear);

gamesRouter.get("/rating/:rating", gamesController.getByRating);

gamesRouter.get("/active", gamesController.getActive);

gamesRouter.get("/inactive", gamesController.getInactive);

gamesRouter.put("/activate/:id", gamesController.activate);

gamesRouter.put("/deactivate/:id", gamesController.deactivate);

export default gamesRouter;