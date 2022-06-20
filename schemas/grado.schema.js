const joi = require('joi');

const idGrado = joi.string()
const nrogrado = joi.string()
// const foto = joi.string()

const crearGradoSchema = joi.object({
  idGrado: idGrado.required(),
  nrogrado: nrogrado.required(),
  
})

const actualizarGradoSchema = joi.object({
  //codD: codD.required(),
  idGrado,
  nrogrado,
})
const findByGradoSchema = joi.object({
    idGrado: idGrado.required()
})

module.exports = {crearGradoSchema,actualizarGradoSchema,findByGradoSchema}