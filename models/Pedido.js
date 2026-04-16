import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
  },
  productos: {
    type: Array, // 👈 ahora sí coincide con cart
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    default: "pendiente",
  }
}, { timestamps: true });

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;