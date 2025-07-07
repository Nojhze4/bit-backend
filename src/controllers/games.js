import GameModel from "../models/games.js";

const gamesController = {
  create: async (req, res) => {
    try {
      const { name, genre, age, console, enrolled } = req.body;
      const newGame = new GameModel({ name, genre, age, console, enrolled });
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
        message: "all games retrieved successfully",
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
      const games = await GameModel.findById(id);
      if (!games) {
        res.status(404).json({
          allOK: false,
          message: `Games with ID ${id} not found`,
          data: error.message,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Games with ID ${id} found`,
        data: game,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error restore game",
        data: null,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, genre, age, console, enrolled } = req.body;
      const gameUpdated = await GameModel.findByIdAndUpdate(id, {
        name,
        genre,
        age,
        console,
        enrolled,
      });
      if (!gameUpdated) {
        res.status(404).json({
          allOK: false,
          message: `Games with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Games with ID ${id} found`,
        data: gameUpdated,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: `Game with ID ${id} updated successfully`,
        data: error.message,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const gameDeleted = await GameModel.findByIdAndDelete(id);
      if (!gameDeleted) {
        res.status(404).json({
          allOK: false,
          message: `Games with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Games with ID ${id} deleted successfully`,
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
