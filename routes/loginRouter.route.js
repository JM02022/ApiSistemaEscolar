const express = require('express')
const controlValidar = require("../middlewares/validation.middleware")
const {crearLogin} = require("../schemas/login.schema")

// const cursoService = require('../services/curso.service')
// const servicioCurso = new cursoService()

const alumnoService = require('../services/alumno.service')
const docenteService = require('../services/docente.service')
const adminService = require('../services/administrador.service')

const servicioAlumno = new alumnoService();



const router = express.Router();



router.post('/',async (req, res, next) => {
  try {
    const body = req.body
    const login = await servicioAlumno.login(body)
    res.status(201).json(login)
  } catch (error) {
    if(error.isBoom.unauthorized){
      const { output } = error
      res.status(output.statusCode).json(output.payload)
    }
    next(error)
  }

})

// router.delete('/:codigoC', controlValidar(findByCursoSchema, 'params'), async (req, res, next) => {
//   try {
//     const {codigoC} = req.params
//     const datoEliminado = await servicioCurso.delete(codigoC)
//     res.status(200).json({
//       mensaje: "Curso eliminado",
//       dato: datoEliminado
//     })

//   } catch (error) {
//     next(error)

//   }
// })
module.exports = router
