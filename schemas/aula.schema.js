const joi = require('joi');

const codAu = joi.string()
const capacidadA = joi.number().min(1).max(30)
const numeroAula = joi.number()
const piso = joi.number().min(1).max(5)

const crearAulaSchema = joi.object({
    codAu: codAu.required(),
    capacidadA : capacidadA .required(),
    numeroAula: numeroAula.required(),
    piso:piso.required()
})

const actualizarAulaSchema = joi.object({
    capacidadA,
    numeroAula,
    piso

})

const findByAulaSchema = joi.object({
    codAu: codAu.required()
})

module.exports = {crearAulaSchema,actualizarAulaSchema,findByAulaSchema}

