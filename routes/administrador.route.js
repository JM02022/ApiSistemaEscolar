const express = require("express");
const controlValidar = require("../middlewares/validation.middleware");
const { findByAdminSchema , crearAdminSchema, actualizarAdminSchema } = require('../schemas/administrador.schema')

const administradorService = require('../services/administrador.service')
const servicioAdministrador = new administradorService()

const router = express.Router()

// Metodos GET
router.get('/',async (req,res,next) => {
    try {
        const administradores = await servicioAdministrador.findAll()
        res.status(200).json(administradores)
    } catch (error) {
        next(error)
    }

})
router.get('/:idAdmi',controlValidar(findByAdminSchema,'params'), async (req,res,next) => {
    try {
        const {idAdmi} = req.params
        const administrador = await servicioAdministrador.findBy(idAdmi)
        res.status(200).json(administrador)
    } catch (error) {
        next(error)
    }
})

// Metodos POST
router.post('/',controlValidar(crearAdminSchema,'body'),async (req, res, next) => {
    try {
        const body = req.body
        const administrador = await servicioAdministrador.create(body)
        res.status(201).json({
            mensaje: 'Registro de administrador exitoso',
            datos: administrador
        })

    } catch (error) {
        next(error)
    }

})

// Metodos PUT
router.put('/:idAdmi',controlValidar(actualizarAdminSchema,'body'),async (req, res, next) => {
    try {
        const { idAdmi } = req.params
        const body = {
          idAdmi: idAdmi,
          ...req.body
        }
        const administrador = await servicioAdministrador.update(idAdmi, body)
        res.status(200).json({
            mensaje: 'Administrador modificado',
            datos: administrador
        })

    } catch (error) {
        next(error)
    }

})

// Metodos DELETE
router.delete('/:idAdmi',controlValidar(findByAdminSchema,'params'),async (req,res,next) => {
    try {
        const { idAdmi } = req.params
        const administradorEliminado = await servicioAdministrador.delete(idAdmi)
        res.status(200).json(administradorEliminado)
    } catch (error) {
        next(error)
    }
})

module.exports = router;
