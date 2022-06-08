const express = require("express");
const controlValidar = require("../middlewares/validation.middleware");
const {crearAlumnoSchema,actualizarAlumnoSchema,findByAlumnoSchema} = require("../schemas/alumno.schema")

const alumnoService = require('../services/alumno.service');
const servicioAlumno = new alumnoService();

const router = express.Router();

//METODOS GET
router.get('/',async (req,res,next) =>{
  try {
    const alumnos = await servicioAlumno.findAll()
    res.status(200).json(alumnos)
  } catch (error) {
    next(error)
  }

})
//GET alumnos por id
router.get('/:codA',controlValidar(findByAlumnoSchema,'params'),async (req,res, next) => {
  try {
    const {codA} = req.params
    const alumno = await servicioAlumno.findBy(codA)
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

router.put('/:codA',controlValidar(actualizarAlumnoSchema,'body'),async(req, res, next) => {//actualizacion completa
  try {
    const { codA } = req.params
    const body = {
      codA: codA,
      ...req.body
    }
    const alumno = await servicioAlumno.update(codA, body)
    res.status(200).json({
      mensaje: 'Alumno modificado',
      datos: alumno
    })

  } catch (error) {
    next(error)
  }
})

router.patch('/:codA',controlValidar(actualizarAlumnoSchema,'body'),async (req,res,next)=> {
  try {
    const { codA } = req.params
    const body = {
      codA: codA,
      ...req.body
    }
    const alumno = await servicioAlumno.updateParcial(codA,body)
    res.status(200).json({
      mensaje: 'Alumno modificado parcialmente',
      datos: alumno
    })

  } catch (error) {
    next(error)
  }

})

router.delete('/:codA',controlValidar(findByAlumnoSchema,'params'),async (req,res,next) => {
  try {
    const {codA} = req.params
    const alumnoEliminado = await servicioAlumno.delete(codA)
    res.status(200).json({
      mensaje: "Alumno eliminado",
      dato: alumnoEliminado
    })

  } catch (error) {
    next(error)

  }

})


module.exports = router;
