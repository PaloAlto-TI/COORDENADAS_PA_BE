const express = require('express');
const router = express.Router();
const productoCTRL = require('../controllers/producto.controller');

router.get('/productos', productoCTRL.getProductos);
router.get('/productos/:id', productoCTRL.getProducto);
router.post('/producto', productoCTRL.createProducto);
router.put('/producto/:id', productoCTRL.updateProducto);
router.put('/productos/:id', productoCTRL.deleteProducto);
router.post('/buscar-producto', productoCTRL.findProducto);



module.exports = router
