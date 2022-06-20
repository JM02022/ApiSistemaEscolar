const express = require("express");
const controlValidar = require("../middlewares/validation.middleware");
const { findByMatriculaSchema , crearMatriculaSchema, actualizarMatriculaSchema } = require('../schemas/matricula.schema')

const matriculaService = require('../services/matricula.service')
const servicioMatricula = new matriculaService()

const router = express.Router()

// Metodos GET
router.get('/',async (req,res,next) => {
    try {
        const matriculas = await servicioMatricula.findAll()
        res.status(200).json(matriculas)
    } catch (error) {
        next(error)
    }

})
router.get('/:idMatricula',controlValidar(findByMatriculaSchema,'params'), async (req,res,next) => {
    try {
        const {idMatricula} = req.params
        const matricula = await servicioMatricula.findBy(idMatricula)
        res.status(200).json(matricula)
    } catch (error) {
        next(error)
    }
})

// Metodos POST
router.post('/',controlValidar(crearMatriculaSchema,'body'),async (req, res, next) => {
    try {
        const body = req.body
        const matricula = await servicioMatricula.create(body)
        res.status(201).json({
            mensaje: 'Registro de matricula exitoso',
            datos: matricula
        })

    } catch (error) {
        next(error)
    }

})

// Metodos PUT
router.put('/:idMatricula',controlValidar(actualizarMatriculaSchema,'body'),async (req, res, next) => {
    try {
        const { idMatricula } = req.params
        const body = {
            idMatricula: idMatricula,
          ...req.body
        }
        const matricula = await servicioMatricula.update(idMatricula, body)
        res.status(200).json({
            mensaje: 'Curso modificado',
            datos: matricula
        })

    } catch (error) {
        next(error)
    }

})

// Metodos DELETE
router.delete('/:idMatricula',controlValidar(findByMatriculaSchema,'params'),async (req,res,next) => {
    try {
        const { idMatricula } = req.params
        const matriculaEliminado = await servicioMatricula.delete(idMatricula)
        res.status(200).json(matriculaEliminado)
    } catch (error) {
        next(error)
    }
})

module.exports = router;