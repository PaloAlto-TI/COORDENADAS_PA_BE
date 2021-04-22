const mongoose = require("mongoose");
const SeccionBodega = require("./SeccionBodega");
const Dimension = require("./Dimension");

const { Schema } = mongoose;

const Bodega = new Schema(
  {
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: true },
    dimension: Dimension.schema,
    coordenadas: [[SeccionBodega.schema]],
    estado: { type: Number, default: 1 },
  },
  { collection: "bodegas", versionKey: "__version" }
);

module.exports = mongoose.model("Bodega", Bodega);
