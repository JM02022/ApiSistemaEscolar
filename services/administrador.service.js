const faker = require("faker");
const boom = require('@hapi/boom');

class AdministradorServices {
  constructor() {
    this.administradores = [];
    this.generarDatos()
  }
  generarDatos() {
    const limite = 5;
    const arr = ["M", "F"]
    for (let i = 0; i < limite; i++) {
      var aleatorio = Math.floor(Math.random() * arr.length)
      this.administradores.push({
        idAdmi: faker.datatype.uuid(),
        contrasenia: faker.internet.password(),
        apellidoP: faker.name.lastName(),
        apellidoM: faker.name.lastName(),
        nombreAd: faker.name.firstName(),
        dni: (Math.floor(Math.random() * (9999999999 - 4000000000)) + 4000000000).toString(),
        sexoAd: arr[aleatorio],
        fechaNaciA: faker.datatype.datetime(),
        celular: (Math.floor(Math.random() * (999999999 - 400000000)) + 400000000).toString(),
        direccion: faker.address.streetAddress(),
        correo: faker.internet.email(),
        // foto: faker.image.imageUrl()
      })
    }
  }

  async create(administrador) {
    let nuevoAdministrador = {
      idAdmi: faker.datatype.uuid(),
      ...administrador
    }
    this.administradores.push(nuevoAdministrador)
    return nuevoAdministrador
  }

  async update(id, administrador) {
    const posAdmin = this.administradores.findIndex(item => item.idAdmi == id)
    if (posAdmin === -1) {
      throw boom.notFound("No se encuentra el administrador")
    }
    this.administradores[posAdmin] = administrador
    return this.administradores[posAdmin]
  }

  async updateParcial(id, adminParcial) {
    const posAdmin = this.administradores.findIndex(item => item.idAdmi == id)
    if (posAdmin === -1) {
      throw boom.notFound("No se encuentra el administrador")
    }
    const admin = this.administradores[posAdmin]
    this.administradores[posAdmin] = {
      ...admin,
      ...adminParcial
    }
    return this.administradores[posAdmin]
  }

  async delete(id) {
    const posAdmin = this.administradores.findIndex(item => item.idAdmi == id)
    if (posAdmin === -1) {
      throw boom.notFound("No se encuentra el administrador")
    }
    this.administradores.splice(posAdmin, 1)
    return {
      mensaje: 'Se elimino administrador',
      id
    }
  }

  async findAll() {
    return this.administradores
  }

  async findBy(id) {
    const administrador = this.administradores.find(item => item.idAdmi == id)
    if (!administrador) {
      throw boom.notFound("No se encuentra el administrador")
    }
    return administrador
  }
}

module.exports = AdministradorServices
