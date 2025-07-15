import { Router } from 'express';
import gamesController from '../controllers/games.js';
const gamesRouter = Router();

gamesRouter.post("/", gamesController.create); 
gamesRouter.get("/", gamesController.readAll); 
gamesRouter.get("/:id", gamesController.readOne); 
gamesRouter.put("/", gamesController.updateWithoutId);
gamesRouter.put("/:id", gamesController.update);  
gamesRouter.delete("/:id", gamesController.delete); 


export default gamesRouter;