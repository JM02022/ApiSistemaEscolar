const faker = require("faker")
const boom = require('@hapi/boom');
class AsistenciaServices {
  constructor() {
    this.asistencias = []
    this.generarDatos()
  }
  generarDatos() {
    const limite = 10;
    const asistenciasEstado = ["asistio","falto","tarde"]
    for (let i = 0; i < limite; i++) {
      this.asistencias.push({
        codAs: faker.datatype.uuid(),
        fechaRegistro: faker.datatype.datetime(),
        estadoAsistencia: asistenciasEstado[Math.floor(Math.random()*asistenciasEstado.length)]
      });
    }
  }
  async create(asistencia) {
    let nuevaAsistencia = {
      codAs: faker.datatype.uuid(),
      ...asistencia
    }
    this.asistencias.push(nuevaAsistencia)
    return nuevaAsistencia
  }
  async update(id, asistencia) {
    const posAsistencia = this.asistencias.findIndex(item => item.codAs == id)
    if (posAsistencia === -1) {
      throw boom.notFound("No se encuentro asistencia")
    }
    this.asistencias[posAsistencia] = asistencia
    return this.asistencias[posAsistencia]
  }

  async updateParcial(id, asistenciaParcial) {
    const posAsistencia = this.asistencias.findIndex(item => item.codAs == id)
    if (posAsistencia === -1) {
      throw boom.notFound("No se encuentro asistencia")
    }
    const asistencia = this.asistencias[posAsistencia]
    this.asistencias[posAsistencia] = {
      ...asistencia,
      ...asistenciaParcial
    }
    return this.asistencias[posAsistencia]
  }

  async delete(id) {
    const posAsistencia = this.asistencias.findIndex(item => item.codAs == id)
    if (posAsistencia === -1) {
      throw boom.notFound("No se encuentro asistencia")
    }
    this.asistencias.splice(posAsistencia, 1)
    return {
      mensaje: 'Se elimino asistencia',
      id
    }
  }

  async findAll() {
    return this.asistencias
  }

  async findBy(id) {
    const asistencia = this.asistencias.find(item => item.codAs == id)
    if (!asistencia) {
      throw boom.notFound("No se encuentro asistencia")
    }
    return asistencia
  }
}

module.exports = AsistenciaServices;
