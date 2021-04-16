const mongoose = require('mongoose');

const URI = 'mongodb://palo:palo123@cluster0-shard-00-00.sfqam.mongodb.net:27017,cluster0-shard-00-01.sfqam.mongodb.net:27017,cluster0-shard-00-02.sfqam.mongodb.net:27017/test?ssl=true&replicaSet=atlas-6cdhgc-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(URI , { useUnifiedTopology: true, useNewUrlParser: true })
    .then(db => console.log('Conectamos a base'))
    .catch(err => console.error(err));

module.exports = mongoose;