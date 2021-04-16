const mongoose = require("mongoose");
const { Schema } = mongoose;

const Dimension = new Schema(
    {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
      z: { type: Number, required: true },     
    },
    { _id: false}
  );


module.exports = mongoose.model("Dimension", Dimension);