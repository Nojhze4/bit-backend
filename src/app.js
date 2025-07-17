import 'dotenv/config';
import connectDB from './config/db.js';
import express from "express";
import morgan from "morgan";
import gamesRouter from "./routers/games.js";
import userRouter from "./routers/user.js";
import homeRouter from "./routers/home.js";
import cors from 'cors';
import multer from 'multer';
import productsRouter from "./routers/products.js";

const app = express()
const host = process.env.HOST
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(204).send();
});

connectDB()

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());

// Configuración de multer para guardar imágenes en /uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'image-' + uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Endpoint global para subir imagen de juego
app.post('/game-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ allOK: false, message: 'No se subió ninguna imagen' });
  }
  res.status(200).json({
    allOK: true,
    message: 'Imagen subida',
    data: {
      imageUrl: `http://localhost:4000/uploads/${req.file.filename}`,
      filename: req.file.filename
    }
  });
});

app.post('/image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ allOK: false, message: 'No se subió ninguna imagen' });
  }
  res.status(200).json({
    allOK: true,
    message: 'Imagen subida',
    data: {
      imageUrl: `http://localhost:4000/uploads/${req.file.filename}`,
      filename: req.file.filename
    }
  });
});

// Servir archivos estáticos de la carpeta uploads
app.use('/uploads', express.static('uploads'));

app.use("/games", gamesRouter);
app.use("/users", userRouter);
app.use("/home", homeRouter);
app.use("/api/products", productsRouter);


app.listen(port, '0.0.0.0', () => {
  console.log(`server is running at ${host} on port ${port}`);
});

