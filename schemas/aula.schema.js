const joi = require('joi');

const codAu = joi.string().uuid()
const capacidadA = joi.number().min(1).max(30)


const crearAulaSchema = joi.object({
    codAu: codAu.required(),
    capacidadA : capacidadA .required(),
})

const actualizarAulaSchema = joi.object({
    //codAu: codAu.required(),
    capacidadA,
})

const findByAulaSchema = joi.object({
    codAu: codAu.required()
})

module.exports = {crearAulaSchema,actualizarAulaSchema,findByAulaSchema}

