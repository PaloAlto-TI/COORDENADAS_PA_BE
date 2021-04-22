const express = require('express')
const app = express()
const { mongoose } = require("./database");
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use(require("./distribucion-productos/routes/producto.routers"));
app.use(require("./distribucion-productos/routes/bodega.routers"));
app.use(require("./Usuarios/routes/usuario.routers"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

