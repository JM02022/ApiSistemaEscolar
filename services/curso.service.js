const faker = require("faker");
const boom = require('@hapi/boom');
class CursoServices {
  constructor() {
    this.cursos = []
    this.generarDatos()
  }
  generarDatos() {
    const limite = 10;
    for (let i = 0; i < limite; i++) {
      this.cursos.push({
        codigoC: faker.datatype.uuid(),
        nombre: faker.name.jobTitle(),
        descripcion: faker.lorem.sentences(),
        imagen: faker.image.business()
      });
    }
  }
  async create(curso) {
    let nuevoCurso = {
      codigoC: faker.datatype.uuid(),
      ...curso
    }
    this.cursos.push(nuevoCurso)
    return nuevoCurso
  }
  async update(id, curso) {
    const posCurso = this.cursos.findIndex(item => item.codigoC == id)
    if (posCurso === -1) {
      throw boom.notFound("No se encuentro curso")
    }
    this.cursos[posCurso] = curso
    return this.cursos[posCurso]
  }

  async updateParcial(id, cursoParcial) {
    const posCurso = this.cursos.findIndex(item => item.codigoC == id)
    if (posCurso === -1) {
      throw boom.notFound("No se encuentro curso")
    }
    const curso = this.cursos[posCurso]
    this.cursos[posCurso] = {
      ...curso,
      ...cursoParcial
    }
    return this.cursos[posCurso]
  }

  async delete(id) {
    const posCurso = this.cursos.findIndex(item => item.codigoC == id)
    if (posCurso === -1) {
      throw boom.notFound("No se encuentro curso")
    }
    this.cursos.splice(posCurso, 1)
    return {
      mensaje: 'Se elimino curso',
      id
    }
  }

  async findAll() {
    return this.cursos
  }

  async findBy(id) {
    const curso = this.cursos.find(item => item.codigoC == id)
    if (!curso) {
      throw boom.notFound("No se encuentro curso")
    }
    return curso
  }
}

module.exports = CursoServices
