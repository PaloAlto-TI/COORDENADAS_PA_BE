const Usuario = require("../models/usuarios");
const usuarioCTRL = {};

usuarioCTRL.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({ estado: { $ne: 0 } });
    res.json(usuarios);
};

usuarioCTRL.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};


usuarioCTRL.getUserbyMail= async (req,res)=>
{
    const usuario=await Usuario.findOne({mail:req.body.mail});
    res.json(usuario);
}

usuarioCTRL.createUsuario = async (req, res) => {
    const usuario = await new Usuario(req.body).save();
    res.json(usuario);

};

usuarioCTRL.updateUsuario = async (req, res) => {
    
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, { $set: new Usuario(req.body) }, { new: true });
    res.json(usuario);

};

usuarioCTRL.deleteUsuario = async (req, res) => {
    
    req.body.estado = 0;
    const producto = await Usuario.findByIdAndUpdate(req.params.id, { $set: new Usuario(req.body) }, { new: true });
    res.json({msg: `Usuario ${req.params.id} Eliminado`});

};

module.exports = usuarioCTRL;