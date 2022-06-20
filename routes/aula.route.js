const express = require('express');
const controlValidar = require("../middlewares/validation.middleware");
const {
  findByAulaSchema,
  crearAulaSchema,
  actualizarAulaSchema
} = require('../schemas/aula.schema')

const aulaService = require('../services/aula.service');

const servicioAula = new aulaService();

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const aulas = await servicioAula.findAll()
        res.status(200).json(aulas)

    } catch (error) {
        next(error)
    }

})

router.get('/:codAu',controlValidar(findByAulaSchema,'params'), async (req,res, next) => {
    try {
        const {codAu} = req.params
        const aulas = await servicioAula.findBy(codAu)
        res.status(200).json(aulas)

    }catch (error) {
        next(error)
    }

})

router.post('/', controlValidar(crearAulaSchema, 'body'), async (req, res, netx) => {
    try {
        const body = req.body
        const aula = await servicioAula.create(body)
        res.status(201).json({
            mensaje: 'Registro de aula existoso',
            datos: aula
    })

    } catch (error) {
        next(error)

    }

})

router.put('/:codAu',controlValidar(actualizarAulaSchema,'body'), async (req, res, next) => {
    try {
        const { codAu } = req.params
        const body = {
            codAu: codAu,
            ...req.body
        }
        const aula = await servicioAula.update(codAu, body)
        res.status(200).json({
            ensaje: 'Aula modificado',
            datos: aula
        })

    } catch (error) {
        next(error)
    }

})

router.delete('/:codAu',controlValidar(findByAulaSchema,'params'),async (req,res,next)=> {
    try {
        const {codAu} = req.params
        const aulaEliminado = await servicioAula.delete(codAu)
        res.status(200).json(aulaEliminado)

    } catch (error) {
        next(error)
    }

  })

module.exports = router
