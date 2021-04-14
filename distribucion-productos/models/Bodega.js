const mongoose = require("mongoose");
const Dimension = require("./Dimension");
const idvalidator = require("mongoose-id-validator");
const { Schema } = mongoose;

const Bodega = new Schema(
  {
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: true },
    dimension: Dimension.schema,
    productos: [
      {
        _id: false,
        producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
        cantidad: { type: Number, required: true },
        coordenadas: Dimension.schema,
        observacion: { type: String },
      },
    ],
    estado: { type: Number, default: 1 },
  },
  { collection: "bodegas", versionKey: "__version" }
);

Bodega.plugin(idvalidator);
module.exports = mongoose.model("Bodega", Bodega);
