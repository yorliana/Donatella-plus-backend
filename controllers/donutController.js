import Donut from "../models/Donut.js";

export const getDonuts = async (req, res) => {
  const donuts = await Donut.find();
  res.json(donuts);
};

export const createDonut = async (req, res) => {
  const donut = new Donut(req.body);
  await donut.save();
  res.json(donut);
};

export const updateDonut = async (req, res) => {
  const updated = await Donut.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteDonut = async (req, res) => {
  await Donut.findByIdAndDelete(req.params.id);
  res.json({ message: "Donut eliminada 🍩" });
};
export const getDonutById = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Donut con id ${id}` });
};
