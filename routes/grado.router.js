const express = require("express");
const controlValidar = require("../middlewares/validation.middleware");
const {
  crearGradoSchema,
  actualizarGradoSchema,
  findByGradoSchema
} = require("../schemas/grado.schema")

const gradoService = require('../services/grado.service');
const servicioGrado = new gradoService();

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const grados = await servicioGrado.findAll()
    res.status(200).json(grados)
  } catch (error) {
    next(error)
  }

})

router.get('/:idGrado', controlValidar(findByGradoSchema, 'params'), async (req, res, next) => {
  try {
    const {
      idGrado
    } = req.params
    const grado = await servicioGrado.findBy(idGrado)
    res.status(200).json(grado)
  } catch (error) {
    next(error)
  }
})

router.post('/', controlValidar(crearGradoSchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body
    const grado = await servicioGrado.create(body)
    res.status(201).json({
      mensaje: 'Registro de grado existoso',
      datos: grado
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:idGrado', controlValidar(actualizarGradoSchema, 'body'), async (req, res, next) => { //actualizacion completa
  try {
    const {
      idGrado
    } = req.params
    const body = {
      idGrado: idGrado,
      ...req.body
    }
    const grado = await servicioAlumno.update(idGrado, body)
    res.status(200).json({
      mensaje: 'Grado modificado',
      datos: grado
    })

  } catch (error) {
    next(error)
  }
})

router.delete('/:idGrado', controlValidar(findByGradoSchema, 'params'), async (req, res, next) => {
  try {
    const {
      idGrado
    } = req.params
    const gradoEliminado = await servicioAlumno.delete(idGrado)
    res.status(200).json(gradoEliminado)
  } catch (error) {
    next(error)
  }

})

module.exports = router;
