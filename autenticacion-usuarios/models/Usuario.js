const mongoose = require("mongoose");
const { Schema } = mongoose;

const Usuario = new Schema(
    {
      correo_electronico: { type: String, required: true, unique: true },
      contrasena: { type: String, required: true },
    },
    { collection: "usuarios" , versionKey: '__version'}
  );


  module.exports = mongoose.model("Usuario", Usuario);