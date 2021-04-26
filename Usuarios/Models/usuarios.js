const mongoose = require("mongoose");
const { Schema } = mongoose;
const idvalidator = require("mongoose-id-validator");

const Usuarios = new Schema(
    {
        codigo: { type: String, unique: true, default: GenCodigo() },
        mail: { type: String, required: true, unique: true },
        nombre: { type: String, required: true},
        apellido: { type: String, required: true },
        bodegas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bodega" }],
        rol: { type: String, required: true },
        estado: { type: Number, default: 1 },
    },
    {collection: "usuarios", versionKey: "__version"}
  );

  function GenCodigo()
  {
    var ID_LENGTH=8;
    var ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var ALPHABET2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rtn = "";
    rtn += ALPHABET2.charAt(Math.floor(Math.random() * ALPHABET2.length));
    for (var i = 0; i < ID_LENGTH; i++) 
    {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
  }

  Usuarios.plugin(idvalidator);
module.exports = mongoose.model("Usuarios", Usuarios);