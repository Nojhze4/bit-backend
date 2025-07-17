import UserModel from "../models/user.js";

const usersController = {
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
      const users = await UserModel.find();
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
      const user = await UserModel.findById(id);
      if (!user) {
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
      const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) {
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
        message: "Error updating user",
        data: error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const userDeleted = await UserModel.findByIdAndDelete(id);
      if (!userDeleted) {
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
  }
};

export default usersController;