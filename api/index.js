import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import donutRoutes from "../routes/donutRoutes.js";
import ventaRoutes from "../routes/ventaRoutes.js";
import pedidosRoutes from "../routes/pedidosRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a MongoDB (solo una vez)
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🍩 Conectado a MongoDB"))
    .catch(err => console.error("❌ Error en Mongo:", err));
}

// Rutas (NO poner "/api" aquí, Vercel ya agrega /api)
app.use("/donuts", donutRoutes);
app.use("/ventas", ventaRoutes);
app.use("/pedidos", pedidosRoutes);

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "Backend funcionando en Vercel 🍩" });
});

// Exportar app para Vercel
export default app;
