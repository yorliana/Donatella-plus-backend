import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema({
  idFactura: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  items: [
    {
      sabor: String,
      cantidad: Number,
      precio: Number,
      subtotal: Number
    }
  ],
  total: Number
});

export default mongoose.model("Venta", ventaSchema);
