// Importaciones

var express = require('express');

var app = express();

//  ------------

app.get('/', (req, res, next) => {

    res.status(200).json({ //  Aqui van los codigos de error y codigos de informe o de mensaje de los servidos como 404 y demas.
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

});

module.exports = app; //    Es para exportas las funciones de este archivo y que puedan usarse en otras partes.