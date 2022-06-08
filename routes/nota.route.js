const express = require('express');
const controlValidar = require("../middlewares/validation.middleware");
const { findByNotaSchema , crearNotaSchema, actualizarNotaSchema } = require('../schemas/nota.schema')

const notaService = require('../services/notas.service');
const servicioNota = new notaService();
const router = express.Router();


router.get('/',async (req,res,next)=>{
  try {
    const notas = await servicioNota.findAll();
    res.status(200).json(notas);
  } catch (error) {
    next(error)
  }
})
//GET alumnos por id
router.get('/:codN',controlValidar(findByNotaSchema,'params'),async(req,res,next)=>{
  try {
    const {codN} = req.params
    const nota = await servicioNota.findBy(codN)
    res.status(200).json(nota)

  } catch (error) {
    next(error)
  }

})

router.patch('/:codN',controlValidar(actualizarNotaSchema,'body'),async(req,res,next) =>{
  try {
    const {codN} = req.params
    const body = {
      codN: codN,
      ...req.body
    }
    const nota = await servicioNota.updateParcial(codN,body)
    res.status(200).json({
      mensaje: 'Nota modificada',
      datos: nota
    })

  } catch (error) {
    next(error)

  }

})

router.post('/',controlValidar(crearNotaSchema,'body') ,async(req, res,next) => {
  try {
    const body = req.body
    const nota = await servicioNota.create(body)
    res.status(201).json({
        mensaje: 'Registro de nota existoso',
        datos: nota
    })
  } catch (error) {
    next(error)
  }

})

module.exports = router
