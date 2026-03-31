import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import donutRoutes from "./routes/donutRoutes.js";
import ventaRoutes from "./routes/ventaRoutes.js";
import pedidosRoutes from "./routes/pedidosRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// Rutas
app.use("/api/donuts", donutRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/pedidos", pedidosRoutes);

app.get("/api", (req, res) => {
  res.send("API Donas funcionando correctamente 🍩  (Vercel)");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Conexión a Mongo SOLO UNA VEZ
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🍩 Conectado a MongoDB (Vercel)"))
    .catch(err => console.error("❌ Error Mongo:", err));
}

// ❗ ESTO ES LO MÁS IMPORTANTE ❗
// Exportamos express SIN app.listen()
export default app;
