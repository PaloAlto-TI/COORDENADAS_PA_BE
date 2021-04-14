const mongoose = require("mongoose");
const { Schema } = mongoose;

const Producto = new Schema(
    {
      codigo: { type: String, required: true, unique: true },
      nombre: { type: String },
      unidad: { type: String },
      estado: { type: Number, default:1 },
    
    },
    { collection: "productos" , versionKey:false}
  );


module.exports = mongoose.model("Producto", Producto);