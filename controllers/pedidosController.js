import Pedido from "../models/Pedido.js";

// 🟢 Crear un nuevo pedido
export const crearPedido = async (req, res) => {
  try {
    const { nombre, telefono, precio } = req.body; // 👈 debe existir req.body
    const nuevoPedido = await Pedido.create({ nombre, telefono, precio });
    res.status(201).json({ mensaje: "Pedido creado correctamente" });
  } catch (error) {
    console.error("Error al guardar pedido:", error);
    res.status(500).json({ mensaje: "Error al guardar pedido" });
  }
};


// 🔵 Obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().sort({ createdAt: -1 });
    res.status(200).json(pedidos);
  } catch (error) {
    console.error("❌ Error al obtener pedidos:", error);
    res.status(500).json({ mensaje: "Error al obtener pedidos", error: error.message });
  }
};

// 🟡 Actualizar un pedido por ID
export const actualizarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, telefono, precio } = req.body;

    const pedidoActualizado = await Pedido.findByIdAndUpdate(
      id,
      { nombre, telefono, precio },
      { new: true } // Devuelve el documento actualizado
    );

    if (!pedidoActualizado)
      return res.status(404).json({ mensaje: "Pedido no encontrado" });

    res.status(200).json({
      mensaje: "🟡 Pedido actualizado correctamente",
      pedido: pedidoActualizado,
    });
  } catch (error) {
    console.error("❌ Error al actualizar pedido:", error);
    res.status(500).json({ mensaje: "Error al actualizar pedido", error: error.message });
  }
};

// 🔴 Eliminar un pedido por ID
export const eliminarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedidoEliminado = await Pedido.findByIdAndDelete(id);

    if (!pedidoEliminado)
      return res.status(404).json({ mensaje: "Pedido no encontrado" });

    res.status(200).json({ mensaje: "🗑️ Pedido eliminado correctamente" });
  } catch (error) {
    console.error("❌ Error al eliminar pedido:", error);
    res.status(500).json({ mensaje: "Error al eliminar pedido", error: error.message });
  }
};
export const createPedido = (req, res) => {
  res.status(201).json({ message: "Pedido creado" });
};

export const getPedidos = (req, res) => {
  res.json({ message: "Listado de pedidos" });
};

export const getPedidoById = (req, res) => {
  res.json({ message: "Pedido por id" });
};

export const updatePedido = (req, res) => {
  res.json({ message: "Pedido actualizado" });
};

export const deletePedido = (req, res) => {
  res.json({ message: "Pedido eliminado" });
};
