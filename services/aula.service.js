const faker = require("faker")
const boom = require('@hapi/boom');

class AulaServices {
  constructor() {
    this.aulas = []
    this.generarDatos()
  }
  generarDatos() {
    const limite = 10;
    for (let i = 0; i < limite; i++) {
      this.aulas.push({
        codAu: faker.datatype.uuid(),
        capacidadA: Math.floor(Math.random() * (40- 1)) + 1
      });
    }
  }
  async create(aula) {
    let nuevaAula = {
      codAu: faker.datatype.uuid(),
      ...aula
    }
    this.aulas.push(nuevaAula)
    return nuevaAula
  }
  async update(id, aula) {
    const posAula = this.aulas.findIndex(item => item.codAu== id)
    if (posAula === -1) {
      throw boom.notFound("No se encuentro aula")
    }
    this.aulas[posAula] = aula
    return this.aulas[posAula]
  }

  async updateParcial(id, aulaParcial) {
    const posAula = this.aulas.findIndex(item => item.codAu == id)
    if (posAula === -1) {
      throw boom.notFound("No se encuentro aula")
    }
    const aula = this.aulas[posAula]
    this.aulas[posAula] = {
      ...aula,
      ...aulaParcial
    }
    return this.aulas[posAula]
  }

  async delete(id) {
    const posAula = this.aulas.findIndex(item => item.codAu == id)
    if (posAula === -1) {
      throw boom.notFound("No se encuentro aula")
    }
    this.aulas.splice(posAula, 1)
    return {
      mensaje: 'Se elimino aula',
      id
    }
  }

  async findAll() {
    return this.aulas
  }

  async findBy(id) {
    const aula = this.aulas.find(item => item.codAu == id)
    if (!aula) {
      throw boom.notFound("No se encuentro aula")
    }
    return aula
  }
}

module.exports = AulaServices
