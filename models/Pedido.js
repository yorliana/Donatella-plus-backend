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
  precio: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
