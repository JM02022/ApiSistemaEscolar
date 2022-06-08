const joi = require('joi');

const codAs= joi.string().uuid()
const fechaRegistro = joi.date()
const estadoAsistencia = joi.string().max(15);


const crearAsistenciaSchema = joi.object({
    codAs: codAs.required(),
    fechaRegistro : fechaRegistro.required(),
    estadoAsistencia: estadoAsistencia.required(),

})

const actualizarAsistenciaSchema = joi.object({
    // codAs: codAs.required(),
    fechaRegistro,
    estadoAsistencia,


})

const findByAsistenciaSchema = joi.object({
    codAs: codAs.required()
})

module.exports = {crearAsistenciaSchema,actualizarAsistenciaSchema,findByAsistenciaSchema}
