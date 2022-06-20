const express = require("express");
const controlValidar = require("../middlewares/validation.middleware");
const { findByHorarioSchema , crearHorarioSchema, actualizarHorarioSchema } = require('../schemas/horario.schema')

const horarioService = require('../services/horario.service')
const servicioHorario = new horarioService()

const router = express.Router()

// Metodos GET
router.get('/',async (req,res,next) => {
    try {
        const horarios = await servicioHorario.findAll()
        res.status(200).json(horarios)
    } catch (error) {
        next(error)
    }

})
router.get('/:idHorario',controlValidar(findByHorarioSchema,'params'), async (req,res,next) => {
    try {
        const {idHorario} = req.params
        const horario = await servicioHorario.findBy(idHorario)
        res.status(200).json(horario)
    } catch (error) {
        next(error)
    }
})

// Metodos POST
router.post('/',controlValidar(crearHorarioSchema,'body'),async (req, res, next) => {
    try {
        const body = req.body
        const horario = await servicioHorario.create(body)
        res.status(201).json({
            mensaje: 'Registro de horario exitoso',
            datos: horario
        })

    } catch (error) {
        next(error)
    }

})

// Metodos PUT
router.put('/:idHorario',controlValidar(actualizarHorarioSchema,'body'),async (req, res, next) => {
    try {
        const { idHorario } = req.params
        const body = {
            idHorario: idHorario,
          ...req.body
        }
        const horario = await servicioHorario.update(idHorario, body)
        res.status(200).json({
            mensaje: 'Horario modificado',
            datos: horario
        })

    } catch (error) {
        next(error)
    }

})

// Metodos DELETE
router.delete('/:idHorario',controlValidar(findByHorarioSchema,'params'),async (req,res,next) => {
    try {
        const { idHorario } = req.params
        const horarioEliminado = await servicioHorario.delete(idHorario)
        res.status(200).json(horarioEliminado)
    } catch (error) {
        next(error)
    }
})

module.exports = router;