import 'dotenv/config';
import connectDB from './config/db.js';
import express from "express";
import morgan from "morgan";
import gamesRouter from "./routers/games.js";
import userRouter from "./routers/user.js";

const app = express()
const host = process.env.HOST
const port = process.env.PORT;


app.get("/", (req, res) => {
    res.status(204).send();
});

// conectar base de datos

connectDB()

// middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use("/games", gamesRouter);
app.use("/users", userRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`server is running at ${host} on port ${port}`);
});

