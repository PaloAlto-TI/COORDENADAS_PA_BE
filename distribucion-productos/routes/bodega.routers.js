const express = require('express');
const router = express.Router();
const bodegaCTRL = require('../controllers/bodega.controller');

router.get('/bodegas', bodegaCTRL.getBodegas);
router.get('/bodegas/:id', bodegaCTRL.getBodega);
router.post('/bodega', bodegaCTRL.createBodega);
router.put('/bodega/:id', bodegaCTRL.updateBodega);


module.exports = router