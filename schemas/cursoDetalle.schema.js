const joi = require('joi');

const idCursoDetalle = joi.string()
const codigoC = joi.string()
const codD = joi.required()
const crearCursoDetalle = joi.object({
    idCursoDetalle: idCursoDetalle.required(),
    codigoC :codigoC.required(),
    codD:codD.required()
})

const actualizarCursoDetalleSchema = joi.object({
    idCursoDetalle,
    codigoC,
    codD
})

const findByCursoDetalleSchema = joi.object({
    idCursoDetalle: idCursoDetalle.required()
})

module.exports = {crearCursoDetalle,actualizarCursoDetalleSchema,findByCursoDetalleSchema}
