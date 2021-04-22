const express = require('express');
const router = express.Router();
const usuarioCTRL = require('../controllers/usuario.controller');

router.get('/usuarios', usuarioCTRL.getUsuarios);
router.get('/usuarios/:id', usuarioCTRL.getUsuario);
router.post('/usuario', usuarioCTRL.createUsuario);
router.post('/usuario-mail', usuarioCTRL.getUserbyMail);
router.put('/usuario/:id', usuarioCTRL.updateUsuario);
router.put('/usuarios-delete/:id', usuarioCTRL.deleteUsuario);


module.exports = router
