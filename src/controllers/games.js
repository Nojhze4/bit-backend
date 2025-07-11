import GameModel from "../models/games.js";

const gamesController = {
  create: async (req, res) => {
    try {
      const { name, genre, launch, console, availability } = req.body;
      const newGame = new GameModel({ name, genre, launch, console, availability });
      const gameCreated = await newGame.save();
      res.status(201).json({
        allOK: true,
        message: "Game created successfully",
        data: gameCreated,
      });
    } catch (error) {
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
      res.status(500).json({
        allOK: false,
        message: "Error deleting game",
        data: error.message,
      });
    }
  },
};

export default gamesController;