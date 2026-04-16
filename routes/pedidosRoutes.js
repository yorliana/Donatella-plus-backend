import express from "express";
import { 
    getPedido,
     crearPedido,
      updatePedido,
        getPedidoById,
       deletePedido

    } from "../controllers/pedidosController.js";

const router = express.Router();

router.get("/", getPedido);
router.post("/", crearPedido);
router.get("/:id", getPedidoById);
router.put("/:id", updatePedido);
router.delete("/:id", deletePedido);


export default router;
