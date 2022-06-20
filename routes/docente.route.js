const express = require("express");

const controlValidar = require("../middlewares/validation.middleware");
const { findByDocenteSchema , crearDocenteSchema, actualizarDocenteSchema } = require('../schemas/docente.schema')

const docenteService = require('../services/docente.service')

const servicioDocente = new docenteService()

const router = express.Router()

// Metodos GET
router.get('/',async (req,res) =>{
  const docentes = await servicioDocente.findAll()
  res.status(200).json(docentes)
})

router.get('/:codD',controlValidar(findByDocenteSchema,'params'),async (req,res, next) => {
  try {
    const {codD} = req.params
    const docente = await servicioDocente.findBy(codD)
    res.status(200).json(docente)
  } catch (error) {
    next(error)
  }

})


router.post('/',controlValidar(crearDocenteSchema,'body'),async (req, res, next) => {
  try {
    const body = req.body
    const docente = await servicioDocente.create(body)
    res.status(201).json({
      ensaje: 'Registro de docente existoso',
      datos: docente
    })

  } catch (error) {
    next(error)
  }

})

router.put('/:codD',controlValidar(actualizarDocenteSchema,'body'), async (req, res, next) => {
    try {
      const { codD } = req.params
      const body = {
        codD,
        ...req.body
      }
      const docente = await servicioDocente.update(codD, body)
      res.status(200).json({
        mensaje: 'Docente modificado',
        datos: docente
    })

    } catch (error) {
      next(error)
    }
})

router.patch('/:codD', async (req, res, next) => {
  try {

    const {codD} = req.params
    const body = req.body
    const docente = await servicioDocente.update(codD, body)
    res.status(200).json({
      mensaje: 'Contraseña modificada',
      datos: docente

    })
  } catch (error) {
    next(error)
  }


})

router.delete('/:codD', async (req, res, next) => {
  try {
    const {codD} = req.params
    const docenteEliminado = await servicioDocente.delete(codD)
    res.status(200).json(docenteEliminado)
  } catch (error) {
    next(error)
  }

})

module.exports = router;
