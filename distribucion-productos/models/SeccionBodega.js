const mongoose = require("mongoose");
const { Schema } = mongoose;
const idvalidator = require("mongoose-id-validator");
const Dimension = require("./Dimension");


const SeccionBodega = new Schema(
    {
        nombre: { type: String, required: true },
        ubicacion: Dimension.schema,
        productos: [
          {
            _id: false,
            producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
            cantidad: { type: Number, required: true },
            observacion: { type: String },
          },
        ],   
    },
    { _id: false}
  );

SeccionBodega.plugin(idvalidator);
module.exports = mongoose.model("SeccionBodega", SeccionBodega);