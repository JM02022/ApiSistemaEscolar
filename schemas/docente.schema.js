const joi = require('joi');

const codD = joi.string()
const contraseniaD = joi.string()
const dniD = joi.string().alphanum().min(9)
const apellidoPD = joi.string().max(30);
const apellidoMD = joi.string().max(30);
const nombreD = joi.string().max(30);
const correo = joi.string().email().max(30)
const fechaNaciD = joi.date();
const sexoD = joi.string().min(0).max(1);
const nroCelularD = joi.string().alphanum().min(9)
const direccionD = joi.string().alphanum().max(40)
const rol = joi.string().min(0).max(1);
// const foto = joi.string()

const crearDocenteSchema = joi.object({
  codD: codD.required(),
  contraseniaD: contraseniaD.required(),
  dniD: dniD.required(),
  apellidoPD: apellidoPD.required(),
  apellidoMD: apellidoMD.required(),
  nombreD: nombreD.required(),
  correo: correo.required(),
  fechaNaciD: fechaNaciD.required(),
  sexoD: sexoD.required(),
  nroCelularD: nroCelularD.required(),
  direccionD: direccionD.required(),
  rol: rol.required()
  // foto
})

const actualizarDocenteSchema = joi.object({
  //codD: codD.required(),
  contraseniaD,
  dniD,
  apellidoPD,
  apellidoMD,
  nombreD,
  correo,
  fechaNaciD,
  sexoD,
  nroCelularD,
  direccionD,
  rol
  // foto
})

const findByDocenteSchema = joi.object({
  codD: codD.required()
})

module.exports = {crearDocenteSchema,actualizarDocenteSchema,findByDocenteSchema}

