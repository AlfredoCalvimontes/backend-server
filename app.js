//  Requieres
var express = require('express');
var mongoose = require('mongoose');


//  Inicializar variables
var app = express();


//  Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datosgit: \x1b[32m%s\x1b[0m', 'online');

});


// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({ //  Aqui van los codigos de error y codigos de informe o de mensaje de los servidos como 404 y demas.
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

});



//  Escuuchar Peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});