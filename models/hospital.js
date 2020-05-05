// Importaciones

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//  ------------

var hospitalSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    img: { type: String, required: false },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }

}, { collection: 'hospitales' }); //  Es para que mongoose creen la coleccion con el nombre especificado.

// usuario	es	de	tipo	Schema.Types.ObjectId,	esto	es	utilizado	para	indicarle	a	Mongoose,	que	ese	campo	es	una	relación	con	otra	colección,	y	la	referencia	es	Usuario

module.exports = mongoose.model('Hospital', hospitalSchema);