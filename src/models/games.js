import { Schema, model } from "mongoose";

const gameSchema = new Schema(
  {
    name: {
      type: String,
    },
    genre: {
      type: String,
    },
    age: {
      type: Date,
    },

    console: {
      type: String,
    },

    availability: {
      type: Boolean,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Game", gameSchema);
