const joi = require('joi');

const idNota = joi.string()
const nota1 = joi.number().min(0).max(20)
const nota2 = joi.number().min(0).max(20)
const nota3= joi.number().min(0).max(20)
const promedio = joi.number().min(0).max(20)
const idAlumno = joi.string().min(1)
const idCursoDetalle = joi.string().min(1)

const crearNotaSchema = joi.object({
    idNota: idNota.required(),
    nota1: nota1.required(),
    nota2: nota2.required(),
    nota3: nota3.required(),
    promedio: promedio.required(),
    idAlumno: idAlumno.required(),
    idCursoDetalle: idCursoDetalle

})

const actualizarNotaSchema = joi.object({
    //codN: codN.required(),
    nota1,
    nota2,
    nota3,
    promedio,
    idAlumno,
    idCursoDetalle

})

const findByNotaSchema = joi.object({
    idNota: idNota.required()
})

module.exports = {crearNotaSchema,actualizarNotaSchema,findByNotaSchema}
