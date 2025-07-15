import { Schema, model } from "mongoose";

const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    consola: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Game", gameSchema);
