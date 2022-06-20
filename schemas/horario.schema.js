const Joi = require('joi');
const joi = require('joi');

const idHorario = joi.string();
const hora = joi.string();
const idCursoDetalle = joi.string() 
const codAu = joi.string()
const idGrado = joi.string()

const crearHorarioSchema = joi.object({
    idHorario: idHorario.required(),
    hora: hora.required(),
    idCursoDetalle: idCursoDetalle.required(),
    codAu: codAu.required(),
    idGrado:idGrado.required()
})

const actualizarHorarioSchema = joi.object({
    hora,
    idCursoDetalle,
    codAu,
    idGrado
})

const findByHorarioSchema = joi.object({
  idHorario: idHorario.required()

})

module.exports = {crearHorarioSchema,actualizarHorarioSchema,findByHorarioSchema}
