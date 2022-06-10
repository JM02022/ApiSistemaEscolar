//usando express
const express = require('express');

const alumnosRouter = require('./alumno.route');
const docenteRouter = require('./docente.route');
const administradorRouter = require('./administrador.route');
const cursoRouter = require('./curso.route');
const notaRouter = require('./nota.route');
const aulaRouter = require('./aula.route');
const asistenciaRouter = require('./asistencia.route');
const loginRouter = require('./loginRouter.route')

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
    routes.use('/login',loginRouter)
}

module.exports = rutas
