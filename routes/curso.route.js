const express = require('express')
const controlValidar = require("../middlewares/validation.middleware")
const {crearCursoSchema,actualizarCursoSchema,findByCursoSchema} = require("../schemas/curso.schema")

const cursoService = require('../services/curso.service')
const servicioCurso = new cursoService()

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cursos = await servicioCurso.findAll()
    res.status(200).json(cursos)
  } catch (error) {
    next(error)
  }

})

router.get('/:codigoC',controlValidar(findByCursoSchema,'params'), async(req, res, next) => {
  try {
    const {codigoC} = req.params
    const cursos = await servicioCurso.findBy(codigoC)
    res.status(200).json(cursos)

  } catch (error) {
    next(error)

  }

})

router.post('/',controlValidar(crearCursoSchema,'body'),async (req, res, next) => {
  try {
    const body = req.body
    const curso = await servicioCurso.create(body)
    res.status(201).json({
      mensaje: 'Registro de curso existoso',
      datos: curso
    })

  } catch (error) {
    next(error)
  }

})

router.put('/:codigoC',controlValidar(actualizarCursoSchema,'body') ,async(req, res, next) => {
  try {
    const {codigoC} = req.params
    const body ={
      codigoC: codigoC,
      ...req.body
    }
    const curso = await servicioCurso.update(codigoC, body)
    res.status(200).json({
      mensaje: 'Curso modificado',
      datos: curso
    })
  } catch (error) {
    next(error)
  }
})

router.patch('/:codigoC',controlValidar(actualizarCursoSchema,'body') ,async(req, res, next) => {
  try {
    const {codigoC} = req.params
    const body ={
      codigoC: codigoC,
      ...req.body
    }
    const curso = await servicioCurso.updateParcial(codigoC, body)
    res.status(200).json({
      mensaje: 'Curso modificado parcialmente',
      datos: curso
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:codigoC', controlValidar(findByCursoSchema, 'params'), async (req, res, next) => {
  try {
    const {codigoC} = req.params
    const datoEliminado = await servicioCurso.delete(codigoC)
    res.status(200).json({
      mensaje: "Curso eliminado",
      dato: datoEliminado
    })

  } catch (error) {
    next(error)

  }

})
module.exports = router
