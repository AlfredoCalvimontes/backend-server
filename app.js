    //  Para iniciar el servidor con el servidor arrancar el mongod, ya sea por terminal o por el .exe
    //  Para arrancar el servicio nodemon debes entrar en la carpeta del proyecto en el cmd y colocar npm star.


    //  Requieres / Importaciones
    var express = require('express');
    var mongoose = require('mongoose');
    var bodyParser = require('body-parser');

    //  Inicializar variables
    var app = express();

    // Body Parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Importar rutas
    var appRoutes = require('./routes/app');
    var usuarioRoutes = require('./routes/usuario');
    var medicoRoutes = require('./routes/medico');
    var hospitalesRoutes = require('./routes/hospital');
    var loginRoutes = require('./routes/login');
    var busquedaRoutes = require('./routes/busqueda');
    var uploadRoutes = require('./routes/upload');
    var imagenesRoutes = require('./routes/imagenes');

    //  ------------

    //  Conexion a la base de datos
    mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

        if (err) throw err;

        console.log('Base de datosgit: \x1b[32m%s\x1b[0m', 'online');

    });

    // Serve-index config (forma alternativa de mostrar imagenes a la dle curso)

    var serveIndex = require('serve-index');
    // app.use(express.static(__dirname + '/'));
    // app.use('/uploads', serveIndex(__dirname + '/uploads'));

    // Rutas
    app.use('/usuario', usuarioRoutes); // Tiene que definirse arriba de la raiz
    app.use('/medico', medicoRoutes);
    app.use('/hospital', hospitalesRoutes);
    app.use('/login', loginRoutes);
    app.use('/busqueda', busquedaRoutes);
    app.use('/upload', uploadRoutes);
    app.use('/imagenes', imagenesRoutes);
    app.use('/', appRoutes); // Cadq que llegue e raiz ('/'), redireccionar a appRoutes


    //  Escuchar Peticiones
    app.listen(3000, () => {
        console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
    });