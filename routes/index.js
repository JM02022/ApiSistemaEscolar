//usando express
const express = require('express');

const alumnosRouter = require('./alumno.route');
const docenteRouter = require('./docente.route');
const administradorRouter = require('./administrador.route');
const cursoRouter = require('./curso.route');
const notaRouter = require('./nota.route');
const aulaRouter = require('./aula.route');
const asistenciaRouter = require('./asistencia.route');
const cursoDetalleRouter = require('./cursoDetalle.route')
const horarioRouter = require('./horario.route')
const matriculaRouter = require('./matricula.route')

// function rutas(app,ROL)
function rutas(app) {
    const routes = express.Router()
    app.use('/colegio', routes) // ruta padre
    routes.use('/alumno', alumnosRouter)
    routes.use('/docente', docenteRouter)
    routes.use('/admin', administradorRouter)
    routes.use('/cursos', cursoRouter)
    routes.use('/notas', notaRouter)
    routes.use('/aulas', aulaRouter)
    routes.use('/asistencia', asistenciaRouter)
    routes.use('/cursoDetalles',cursoDetalleRouter)
    routes.use('/horarios',horarioRouter)
    routes.use('/matriculas',matriculaRouter)
}

module.exports = rutas
