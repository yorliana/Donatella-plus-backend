

import mongoose from "mongoose";

const donutSchema = new mongoose.Schema({
  sabor: {
     type: String, 
     required: true 
    },

  precio: { 
    type: Number, 
    required: true 

  },
  stock: {
     type: Number,
     required: true
     },

  imagen: { 
    type: String
 }
});

export default mongoose.model("Donut", donutSchema);


