import { Router } from 'express';
import gamesController from '../controllers/games.js';

const gamesRouter = Router();

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