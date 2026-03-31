import express from "express";
import Donut from "../models/Donut.js";
const router = express.Router();

// Obtener todas
router.get("/", async (req, res) => {
  const donuts = await Donut.find();
  res.json(donuts);
});

// Crear
router.post("/", async (req, res) => {
  const donut = new Donut(req.body);
  await donut.save();
  res.json(donut);
});

// Editar
router.put("/:id", async (req, res) => {
  const updated = await Donut.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Eliminar
router.delete("/:id", async (req, res) => {
  await Donut.findByIdAndDelete(req.params.id);
  res.json({ message: "Donut eliminada" });
});

export default router;
