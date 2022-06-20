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
router.get('/:idNota',controlValidar(findByNotaSchema,'params'),async(req,res,next)=>{
  try {
    const {idNota} = req.params
    const nota = await servicioNota.findBy(idNota)
    res.status(200).json(nota)

  } catch (error) {
    next(error)
  }

})

router.patch('/:idNota',controlValidar(actualizarNotaSchema,'body'),async(req,res,next) =>{
  try {
    const {idNota} = req.params
    const body = {
      idNota: idNota,
      ...req.body
    }
    const nota = await servicioNota.updateParcial(idNota,body)
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
    res.status(201).json(nota)
  } catch (error) {
    next(error)
  }

})

router.delete('/:idNota',controlValidar(findByNotaSchema,'params'), async(req,res,next) => {
  try {
    const {
      idNota
    } = req.params
    const eliminarNota = await servicioNota.delete(idNota)
    res.status(200).json(eliminarNota)
  } catch (error) {
    next(error)
  }
})

module.exports = router
