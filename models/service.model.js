const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../models/user.model');


const serviceSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength: 500
    },
    /*ID del usuario que va a realizar el servicio*/
    idOfferUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    antCoins: {
        type: Number,
        required: 'El coste del servicio es obligatorio. Si necesitas ayuda con los precios, visita nuestra tabla de equivalencias'
    },
    /*IDs de las palabras clave con las que se filtrará*/
    idKeyWords:[{
        type: Schema.type.ObjectId,
        ref: 'keyWords'
    }]
});
const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;