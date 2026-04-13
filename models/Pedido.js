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
   producto: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true,
  },
   estado: {
    type: String,
    default: "pendiente"
  }
}, { timestamps: true });

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
