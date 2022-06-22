const joi = require('joi');

const idAlumno = joi.string()
const contrasenia = joi.string()
const dni = joi.string().alphanum().min(9)
const apellidoP = joi.string().max(30);
const apellidoM = joi.string().max(30);
const nombre = joi.string().max(30);
const fechaNacimiento = joi.date();
const sexoA = joi.string().min(0).max(1);
const direccion = joi.string().max(40);
const nroNumeroCelular = joi.string().alphanum().min(9);

const crearAlumnoSchema = joi.object({
  idAlumno: idAlumno.required(),
  contrasenia: contrasenia.required(),
  dni: dni.required(),
  apellidoP: apellidoP.required(),
  apellidoM: apellidoM.required(),
  nombre: nombre.required(),
  fechaNacimiento: fechaNacimiento.required(),
  sexoA: sexoA.required(),
  direccion: direccion.required(),
  nroNumeroCelular: nroNumeroCelular.required(),

})

const actualizarAlumnoSchema = joi.object({
  idAlumno,
  contrasenia,
  dni,
  apellidoP,
  apellidoM,
  nombre,
  fechaNacimiento,
  sexoA,
  direccion,
  nroNumeroCelular
})

const findByAlumnoSchema = joi.object({
  idAlumno: idAlumno.required()
})

module.exports = {crearAlumnoSchema,actualizarAlumnoSchema,findByAlumnoSchema}
