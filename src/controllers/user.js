import GameModel from "../models/games.js";

const gamesController = {
  create: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new UserModel({ username, email, password });
      const userCreated = await newUser.save();
      res.status(201).json({
        allOK: true,
        message: "User created successfully",
        data: userCreated,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error creating user",
        data: error.message,
      });
    }
  },

  readAll: async (req, res) => {
    try {
      const games = await GameModel.find();
      res.status(200).json({
        allOK: true,
        message: "All users retrieved successfully",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error retrieving users",
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
          message: `User with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `User with ID ${id} found`,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error retrieving user",
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
          message: `User with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `User with ID ${id} updated successfully`,
        data: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error updating users",
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
          message: `User with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `User with ID ${id} deleted successfully`,
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: "Error deleting user",
        data: error.message,
      });
    }
  },
  const cors = require('cors');
  app.use(cors({
    origin: 'http://localhost:4200', // Permite solo tu frontend
    credentials: true
  }));
};

export default usersController;