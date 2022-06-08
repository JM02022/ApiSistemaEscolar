const joi = require('joi');

const codigoC = joi.string().uuid()
const nombre = joi.string().max(30)
const descripcion = joi.string().max(50);
const imagen = joi.string().max(50);

const crearCursoSchema = joi.object({
  codigoC: codigoC.required(),
  nombre: nombre.required(),
  descripcion: descripcion.required(),
  imagen: imagen.required(),
})

const actualizarCursoSchema = joi.object({
  //codigoC: codigoC.required(),
  nombre,
  descripcion,
  imagen,
})

const findByCursoSchema = joi.object({
  codigoC: codigoC.required()
})

module.exports = {crearCursoSchema,actualizarCursoSchema,findByCursoSchema}
