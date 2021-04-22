const Bodega = require("../models/Bodega");
const bodegaCTRL = {};

bodegaCTRL.getBodegas = async (req, res) => {
    const bodegas = await Bodega.find({ estado: { $ne: 0 } });
    res.json(bodegas);
};

bodegaCTRL.getBodega = async (req, res) => {
    const bodega = await Bodega.findById(req.params.id);
    res.json(bodega);
};

bodegaCTRL.createBodega = async (req, res) => {

    const bodega = await new Bodega(req.body).save();
    
    res.json(bodega);

};

bodegaCTRL.updateBodega = async (req, res) => {
    
    const bodega = await Bodega.findByIdAndUpdate(req.params.id, { $set: new Bodega(req.body) }, { new: true });
    res.json(bodega);
    
};

module.exports = bodegaCTRL;