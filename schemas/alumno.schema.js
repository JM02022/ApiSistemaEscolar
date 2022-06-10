const joi = require('joi');

const codA = joi.string().uuid()
const contrasenia = joi.string()
const dni = joi.string().alphanum().min(9)
const apellidoP = joi.string().max(30);
const apellidoM = joi.string().max(30);
const nombreA = joi.string().max(30);
const fechaNaciA = joi.date();
const sexoA = joi.string().min(0).max(1)
const direccion = joi.string().alphanum().max(40)
const foto = joi.string()

const crearAlumnoSchema = joi.object({
  codA: codA.required(),
  contrasenia: contrasenia.required(),
  dni: dni.required(),
  apellidoP: apellidoP.required(),
  apellidoM: apellidoM.required(),
  nombreA: nombreA.required(),
  fechaNaciA: fechaNaciA.required(),
  sexoA: sexoA.required(),
  direccion: direccion.required(),
  foto
})

const actualizarAlumnoSchema = joi.object({
  // codA: codA.required(),
  contrasenia,
  dni,
  apellidoP,
  apellidoM,
  nombreA,
  fechaNaciA,
  sexoA,
  direccion,
  foto
})

const findByAlumnoSchema = joi.object({
  codA: codA.required()
})

module.exports = {crearAlumnoSchema,actualizarAlumnoSchema,findByAlumnoSchema}
