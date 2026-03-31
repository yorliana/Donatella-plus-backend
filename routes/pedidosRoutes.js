import { Router } from "express";
import {
  getPedidos,
  createPedido,
  getPedidoById,
  updatePedido,
  deletePedido
} from "../controllers/pedidosController.js";

const router = Router();

// Rutas
router.get("/", getPedidos);
router.post("/", createPedido);
router.get("/:id", getPedidoById);
router.put("/:id", updatePedido);
router.delete("/:id", deletePedido);

export default router;
