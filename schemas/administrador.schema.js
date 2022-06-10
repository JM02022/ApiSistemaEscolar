const Joi = require('joi');
const joi = require('joi');

const idAdmi = joi.string().uuid();
const contrasenia = joi.string().max(30);
const apellidoP = joi.string().max(30);
const apellidoM = joi.string().max(30);
const nombreAd = joi.string().max(30);
const dni = joi.string().alphanum().min(9)
const sexoAd = joi.string().min(0).max(1)
const celular = joi.string().alphanum().min(9)
const direccion = joi.string().max(40)
const fechaNaciA = joi.date();
const correo = joi.string().email().max(50);
const foto = joi.string()

const crearAdminSchema = joi.object({
  idAdmi: idAdmi.required(),
  contrasenia: contrasenia.required(),
  apellidoP: apellidoP.required(),
  apellidoM: apellidoM.required(),
  nombreAd: nombreAd.required(),
  dni: dni.required(),
  sexoAd: sexoAd.required(),
  fechaNaciA: fechaNaciA.required(),
  celular,
  direccion,
  correo,
  // foto
})

const actualizarAdminSchema = joi.object({
  idAdmi: idAdmi.required(),
  contrasenia,
  apellidoP,
  apellidoM,
  nombreAd,
  dni,
  sexoAd,
  celular,
  direccion,
  correo,
  // foto
})

// const eliminarAdminSchema = joi.object({
//   idAdmi: idAdmi.required()
// })

const findByAdminSchema = joi.object({
  idAdmi: idAdmi.required()
})

module.exports = {crearAdminSchema,actualizarAdminSchema,findByAdminSchema}
