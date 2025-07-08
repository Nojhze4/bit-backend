import { Schema, model } from "mongoose";

const gameSchema = new Schema(
  {
    name: {
      type: String,
    },
    genre: {
      type: String,
    },
    launch: {
      type: Date,
    },

    console: {
      type: String,
    },

    availability: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Game", gameSchema);
