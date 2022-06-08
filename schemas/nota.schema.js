const joi = require('joi');

const codN = joi.string().uuid()
const nota1 = joi.number().min(0).max(20)
const nota2 = joi.number().min(0).max(20)
const nota3= joi.number().min(0).max(20)
const promFinal = joi.number().min(0).max(20)

const crearNotaSchema = joi.object({
    codN: codN.required(),
    nota1: nota1.required(),
    nota2: nota2.required(),
    nota3: nota3.required(),
    promFinal: promFinal.required(),

})

const actualizarNotaSchema = joi.object({
    //codN: codN.required(),
    nota1,
    nota2,
    nota3,
    promFinal,

})

const findByNotaSchema = joi.object({
    codN: codN.required()
})

module.exports = {crearNotaSchema,actualizarNotaSchema,findByNotaSchema}
