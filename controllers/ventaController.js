import Venta from "../models/Venta.js";
import { v4 as uuidv4 } from "uuid";



export const createVenta = (req, res) => {
  res.status(201).json({ message: "Venta creada" });
};

export const getVentas = (req, res) => {
  res.json({ message: "Listado de ventas" });
};

export const getVentaById = (req, res) => {
  res.json({ message: "Venta por id" });
};

export const deleteVenta = (req, res) => {
  res.json({ message: "Venta eliminada" });
};



export const obtenerVentas = async (req, res) => {
  const ventas = await Venta.find().sort({ fecha: -1 });
  res.json(ventas);
};

export const resumenDelDia = async (req, res) => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const resumen = await Venta.aggregate([
    { $match: { fecha: { $gte: hoy } } },
    {
      $group: {
        _id: null,
        totalVentas: { $sum: "$total" },
        cantidadVentas: { $sum: 1 },
        donasVendidas: { $sum: { $size: "$items" } }
      }
    }
  ]);

  res.json(resumen[0] || { totalVentas: 0, cantidadVentas: 0, donasVendidas: 0 });
};

export const updateVenta = (req, res) => {
  res.json({ message: "Venta actualizada" });
};
