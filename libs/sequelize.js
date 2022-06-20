const {Sequelize} = require('sequelize');
const {setupModels} = require('../db/modelos/index') //importando

const user = 'postgres';//cada uno pone su user
const host = 'localhost';   
const port = 5432;
const password = '1234'//cada uno pone su password
const database = 'dbColegio'

const USUARIO = encodeURIComponent(user)
const PASSWORD = encodeURIComponent(password)


const URI = `postgres://${USUARIO}:${PASSWORD}@${host}:${port}/${database}`

const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  logging: console.log
})
setupModels(sequelize) // se cargaron todos los modelos
sequelize.sync() // ejecuta una sicronizacion 
module.exports = sequelize
