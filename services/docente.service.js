const faker = require("faker");
const boom = require('@hapi/boom');
class DocenteServices {
  constructor() {
    this.docentes = []
    this.generarDatos()
  }
  generarDatos() {
    const limite = 10;
    const sexoLista = ["M","F"]
    for (let i = 0; i < limite; i++) {
      this.docentes.push({
        codD: faker.datatype.uuid(),
        contraseniaD: faker.internet.password(),
        dniD: Math.floor(Math.random() * (8 - 1)) + 1,
        apellidoPD: faker.name.lastName(),
        apellidoMD: faker.name.lastName(),
        nombreD: faker.name.firstName(),
        sexoD: sexoLista[Math.floor(Math.random()*sexoLista.length)],
        nroCelularD: faker.phone.phoneNumber(),
        fechaNaciD: faker.datatype.datetime(),
        correo: faker.internet.email(),
        direccionD: faker.address.streetSuffix(),
        foto: faker.image.imageUrl()
      });
    }
  }
  async create(docente) {
    const nuevoDocente = {
      codD: faker.datatype.uuid(),
      ...docente
    }
    this.docentes.push(nuevoDocente)
    return nuevoDocente
  }
  async update(id, docente) {
    const posDocente = this.docentes.findIndex(item => item.codD == id)
    if (posDocente === -1) {
      throw boom.notFound("No se encuentro docente")
    }
    this.docentes[posDocente] = docente
    return this.docentes[posDocente]
  }

  async updateParcial(id, docenteParcial) {
    const posDocente = this.docentes.findIndex(item => item.codD == id)
    if (posDocente === -1) {
      throw boom.notFound("No se encuentro docente")
    }
    const docente = this.docentes[posDocente]
    this.docentes[posDocente] = {
      ...docente,
      ...docenteParcial
    }
    return this.docentes[posDocente]
  }

  async delete(id) {
    const posDocente = this.docentes.findIndex(item => item.codD == id)
    if (posDocente === -1) {
      throw boom.notFound("No se encuentro docente")
    }
    this.docentes.splice(posDocente, 1)
    return {
      mensaje: 'Se elimino docente',
      id
    }
  }

  async findAll() {
    return this.docentes
  }

  async findBy(id) {
    const docente = this.docentes.find(item => item.codD == id)
    if (!docente) {
      throw boom.notFound("No se encuentro docente")
    }
    return docente
  }
}

module.exports = DocenteServices
