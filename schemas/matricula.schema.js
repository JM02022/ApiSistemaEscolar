const joi = require('joi');

const idMatricula = joi.string()
const fecha = joi.date()
const pagoMatricula = joi.number()
const idGrado = joi.string()
const idAlumno = joi.string()
const idAdmi = joi.string()

const crearMatriculaSchema = joi.object({
  idMatricula: idMatricula.required(),
  fecha: fecha.required(),
  pagoMatricula: pagoMatricula.required(),
  idGrado: idGrado.required(),
  idAlumno: idAlumno.required(),
  idAdmi: idAdmi.required(),
})

const actualizarMatriculaSchema = joi.object({
  idMatricula,
  fecha,
  pagoMatricula,
  idGrado,
  idAlumno,
  idAdmi
})

const findByMatriculaSchema = joi.object({
  idMatricula: idMatricula.required()
})

module.exports = {
  crearMatriculaSchema,
  actualizarMatriculaSchema,
  findByMatriculaSchema
}
