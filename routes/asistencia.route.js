const express = require('express');
const controlValidar = require("../middlewares/validation.middleware");
const { findByAsistenciaSchema , crearAsistenciaSchema, actualizarAsistenciaSchema } = require('../schemas/asistencia.schema')

const asistenciaService = require('../services/asistencia.service');

const servicioAsistencias = new asistenciaService();

const router = express.Router();

router.get('/', async (req,res,next)=>{
  try {
    const asistencias = await servicioAsistencias.findAll()
    res.status(200).json(asistencias)
  }catch (error) {
    next(error)
  }

})

router.get('/:codAs',async (req,res,next)=>{
  try {
    const {codAs} = req.params
    const asistencia = await servicioAsistencias.findBy(codAs);
    res.status(200).json(asistencia);

  } catch (error) {
    next(error)
  }

})

router.post('/',controlValidar(crearAsistenciaSchema,'body'),async (req,res,next) =>{
  try {
    const body = req.body;
    const asistencia = await servicioAsistencias.create(body);
    res.status(201).json({
      mensaje: 'registro de asistencia exitoso',
      datos: asistencia
    })

  } catch (error) {
    next(error)
  }

})

router.patch('/:codAs',controlValidar(actualizarAsistenciaSchema,'body'), async (req,res,next) =>{
  try {
    const {codAs} = req.params
    const body = {
      codAs: codAs,
      ...req.body
    }
    const asistencia = await servicioAsistencias.updateParcial(codAs,body)
    res.status(200).json({
      mensaje: 'Asistencia modificada',
      datos: asistencia
  })
  } catch (error) {
    next(error)

  }
})

router.delete('/:codAs', controlValidar(findByAsistenciaSchema,'params'),async (req,res,next) => {
  try {

    const {codAs} = req.params
    const datoEliminado = await servicioAsistencias.delete(codAs)
    res.status(200).json(datoEliminado)

  } catch (error) {
    next(error)
  }

})
module.exports = router
