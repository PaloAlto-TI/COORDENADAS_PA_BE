const Producto = require("../models/Producto");
const productoCTRL = {};

productoCTRL.getProductos = async (req, res) => {
    const productos = await Producto.find({ estado: { $ne: 0 } });
    res.json(productos);
};

productoCTRL.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

productoCTRL.createProducto = async (req, res) => {
    const producto = await new Producto(req.body).save();
    res.json(producto);

};

productoCTRL.updateProducto = async (req, res) => {
    
    const producto = await Producto.findByIdAndUpdate(req.params.id, { $set: new Producto(req.body) }, { new: true });
    res.json(producto);

};

productoCTRL.deleteProducto = async (req, res) => {
    
    req.body.estado = 0;
    const producto = await Producto.findByIdAndUpdate(req.params.id, { $set: new Producto(req.body) }, { new: true });
    res.json({msg: `Producto ${req.params.id} Eliminado`});

};

module.exports = productoCTRL;