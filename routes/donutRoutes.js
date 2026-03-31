import express from "express";
import { 
    getDonuts,
     createDonut,
      updateDonut,
        getDonutById,
       deleteDonut 
    } from "../controllers/donutController.js";

const router = express.Router();

router.get("/", getDonuts);
router.post("/", createDonut);
router.get("/:id", getDonutById);
router.put("/:id", updateDonut);
router.delete("/:id", deleteDonut);

export default router;
