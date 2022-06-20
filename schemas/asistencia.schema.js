const joi = require('joi');

const codAs= joi.string()
const fechaRegistro = joi.date()
const estadoAsistencia = joi.string().max(15);
const codD = joi.string()
const idAlumno = joi.string()

const crearAsistenciaSchema = joi.object({
    codAs: codAs.required(),
    fechaRegistro : fechaRegistro.required(),
    estadoAsistencia: estadoAsistencia.required(),
    codD:codD.required(),
    idAlumno:idAlumno.required()
})

const actualizarAsistenciaSchema = joi.object({
    fechaRegistro,
    estadoAsistencia,
    codD,
    idAlumno
})

const findByAsistenciaSchema = joi.object({
    codAs: codAs.required()
})

module.exports = {crearAsistenciaSchema,actualizarAsistenciaSchema,findByAsistenciaSchema}
