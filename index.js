//usando express
const express = require("express");
//usando carpeta rutas
const rutas = require('./routes');

const cors = require('cors')
//usando middlewares
const {manejarError,mostrarError, boomManejarError} = require('./middlewares/error.middleware')
//usando express
const aplicacion = express();
//puerto usado
const port = 3600;
//usar formato json
aplicacion.use(cors())
aplicacion.use(express.json());
//usando las rutas
rutas(aplicacion)
aplicacion.use(mostrarError); //usando despues de llamar a la app
aplicacion.use(boomManejarError);
aplicacion.use(manejarError);
//llamar al puerto
aplicacion.listen(port,()=>{
    console.log("Puerto activo"+ port);
})
