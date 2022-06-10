const joi = require('joi');

const usuario = joi.string().uuid()
const contrasenia = joi.string().max(30)


const crearLogin = joi.object({
  codA: usuario.required(),
  contrasenia: contrasenia.required()
})

module.exports = {crearLogin};
