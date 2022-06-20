const express = require("express");
const controlValidar = require("../middlewares/validation.middleware");
const { findByCursoDetalleSchema , crearCursoDetalle, actualizarCursoDetalleSchema } = require('../schemas/cursoDetalle.schema')

const cursoDetalleService = require('../services/cursoDetalle.service')
const serviciocursoDetalle = new cursoDetalleService()

const router = express.Router()

// Metodos GET
router.get('/',async (req,res,next) => {
    try {
        const cursoDetalle = await serviciocursoDetalle.findAll()
        res.status(200).json(cursoDetalle)
    } catch (error) {
        next(error)
    }

})
router.get('/:idCursoDetalle',controlValidar(findByCursoDetalleSchema,'params'), async (req,res,next) => {
    try {
        const {idCursoDetalle} = req.params
        const cursoDetalle = await serviciocursoDetalle.findBy(idCursoDetalle)
        res.status(200).json(cursoDetalle)
    } catch (error) {
        next(error)
    }
})

// Metodos POST
router.post('/',controlValidar(crearCursoDetalle,'body'),async (req, res, next) => {
    try {
        const body = req.body
        const cursoDetalle = await serviciocursoDetalle.create(body)
        res.status(201).json({
            mensaje: 'Registro de curso detalle exitoso',
            datos: cursoDetalle
        })

    } catch (error) {
        next(error)
    }

})

// Metodos PUT
router.put('/:idCursoDetalle',controlValidar(actualizarCursoDetalleSchema,'body'),async (req, res, next) => {
    try {
        const { idCursoDetalle } = req.params
        const body = {
            idCursoDetalle: idCursoDetalle,
          ...req.body
        }
        const crearcursoDetalle = await serviciocursoDetalle.update(idCursoDetalle, body)
        res.status(200).json({
            mensaje: 'Curso detalle modificado',
            datos: crearcursoDetalle
        })

    } catch (error) {
        next(error)
    }

})

// Metodos DELETE
router.delete('/:idCursoDetalle',controlValidar(findByCursoDetalleSchema,'params'),async (req,res,next) => {
    try {
        const { idCursoDetalle } = req.params
        const cursoDetalleEliminado = await serviciocursoDetalle.delete(idCursoDetalle)
        res.status(200).json(cursoDetalleEliminado)
    } catch (error) {
        next(error)
    }
})

module.exports = router;
