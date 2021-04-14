const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/distribucion-inventario';

mongoose.connect(URI , { useUnifiedTopology: true, useNewUrlParser: true })
    .then(db => console.log('Conectamos a base'))
    .catch(err => console.error(err));

module.exports = mongoose;