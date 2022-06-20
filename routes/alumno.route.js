const express = require("express");
const controlValidar = require("../middlewares/validation.middleware");
const {crearAlumnoSchema,actualizarAlumnoSchema,findByAlumnoSchema} = require("../schemas/alumno.schema")


const alumnoService = require('../services/alumno.service');
const servicioAlumno = new alumnoService();

const router = express.Router();


router.get('/',async (req,res,next) =>{
  try {
    const alumnos = await servicioAlumno.findAll()
    res.status(200).json(alumnos)
  } catch (error) {
    next(error)
  }

})

router.get('idAlumno',controlValidar(findByAlumnoSchema,'params'),async (req,res, next) => {
  try {
    const {idAlumno} = req.params
    const alumno = await servicioAlumno.findBy(idAlumno)
    res.status(200).json(alumno)
  } catch (error) {
    next(error)
  }

})




router.post('/',controlValidar(crearAlumnoSchema,'body') ,async(req, res,next) => {
  try {
    const body = req.body
    const alummno = await servicioAlumno.create(body)
    res.status(201).json({
        mensaje: 'Registro de alumno existoso',
        datos: alummno
    })
  } catch (error) {
    next(error)
  }

})

router.put('idAlumno',controlValidar(actualizarAlumnoSchema,'body'),async(req, res, next) => {//actualizacion completa
  try {
    const {idAlumno } = req.params
    const body = {
      idAlumno: idAlumno,
      ...req.body
    }
    const alumno = await servicioAlumno.update(idAlumno, body)
    res.status(200).json({
      mensaje: 'Alumno modificado',
      datos: alumno
    })

  } catch (error) {
    next(error)
  }
})

router.patch('idAlumno',controlValidar(actualizarAlumnoSchema,'body'),async (req,res,next)=> {
  try {
    const { idAlumno } = req.params
    const body = {
      idAlumno: idAlumno,
      ...req.body
    }
    const alumno = await servicioAlumno.updateParcial(idAlumno,body)
    res.status(200).json({
      mensaje: 'Alumno modificado parcialmente',
      datos: alumno
    })

  } catch (error) {
    next(error)
  }

})

router.delete('idAlumno',controlValidar(findByAlumnoSchema,'params'),async (req,res,next) => {
  try {
    const { idAlumno} = req.params
    const alumnoEliminado = await servicioAlumno.delete(idAlumno)
    res.status(200).json(alumnoEliminado)
  } catch (error) {
    next(error)

  }

})


module.exports = router;
