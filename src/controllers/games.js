import GameModel from "../models/games.js";

const gamesController = {
  create: async (req, res) => {
    try {
      const { name, consola, genero, descripcion, precio } = req.body;
      
      // Validar que todos los campos requeridos estén presentes
      if (!name || !consola || !genero || !descripcion || precio === undefined) {
        return res.status(400).json({
          allOK: false,
          message: "Todos los campos son requeridos: name, consola, genero, descripcion, precio",
          data: null,
        });
      }

      // Validar que precio sea un número válido
      if (typeof precio !== 'number' || precio < 0) {
        return res.status(400).json({
          allOK: false,
          message: "El precio debe ser un número válido mayor o igual a 0",
          data: null,
        });
      }

      const newGame = new GameModel({ name, consola, genero, descripcion, precio });
      const gameCreated = await newGame.save();
      res.status(201).json({
        allOK: true,
        message: "Game created successfully",
        data: gameCreated,
      });
    } catch (error) {
      console.error("Error creating game:", error);
      res.status(500).json({
        allOK: false,
        message: "Error creating game",
        data: error.message,
      });
    }
  },

  readAll: async (req, res) => {
    try {
      const games = await GameModel.find();
      res.status(200).json({
        allOK: true,
        message: "All games retrieved successfully",
        data: games,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error retrieving games",
        data: error.message,
      });
    }
  },

  readOne: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Validar que el ID tenga el formato correcto de MongoDB
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({
          allOK: false,
          message: "ID inválido. Debe ser un ObjectId válido de MongoDB",
          data: null,
        });
      }

      const game = await GameModel.findById(id);
      if (!game) {
        return res.status(404).json({
          allOK: false,
          message: `Game with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Game with ID ${id} found`,
        data: game,
      });
    } catch (error) {
      console.error("Error retrieving game:", error);
      res.status(500).json({
        allOK: false,
        message: "Error retrieving game",
        data: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Validar que el ID tenga el formato correcto de MongoDB
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({
          allOK: false,
          message: "ID inválido. Debe ser un ObjectId válido de MongoDB",
          data: null,
        });
      }

      const updatedGame = await GameModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedGame) {
        return res.status(404).json({
          allOK: false,
          message: `Game with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Game with ID ${id} updated successfully`,
        data: updatedGame,
      });
    } catch (error) {
      console.error("Error updating game:", error);
      res.status(500).json({
        allOK: false,
        message: "Error updating game",
        data: error.message,
      });
    }
  },

  updateWithoutId: async (req, res) => {
    try {
      // Buscar el primer juego disponible para actualizar
      const existingGame = await GameModel.findOne();
      
      if (!existingGame) {
        return res.status(404).json({
          allOK: false,
          message: "No hay juegos disponibles para actualizar. Primero crea un juego con POST /games",
          data: null,
        });
      }

      const updatedGame = await GameModel.findByIdAndUpdate(existingGame._id, req.body, { new: true });
      res.status(200).json({
        allOK: true,
        message: `Game with ID ${existingGame._id} updated successfully`,
        data: updatedGame,
      });
    } catch (error) {
      console.error("Error updating game without ID:", error);
      res.status(500).json({
        allOK: false,
        message: "Error updating game",
        data: error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Validar que el ID tenga el formato correcto de MongoDB
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({
          allOK: false,
          message: "ID inválido. Debe ser un ObjectId válido de MongoDB",
          data: null,
        });
      }

      const gameDeleted = await GameModel.findByIdAndDelete(id);
      if (!gameDeleted) {
        return res.status(404).json({
          allOK: false,
          message: `Game with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Game with ID ${id} deleted successfully`,
        data: null,
      });
    } catch (error) {
      console.error("Error deleting game:", error);
      res.status(500).json({
        allOK: false,
        message: "Error deleting game",
        data: error.message,
      });
    }
  },
};

export default gamesController;