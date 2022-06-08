const faker = require("faker");
const boom = require('@hapi/boom');
class AlumnoServices {
  constructor() {
    this.alumnos = []
    this.generarDatos()
  }

  generarDatos() {
    const limite = 10;
    const arr = ["M", "F"]
    for (let i = 0; i < limite; i++) {
      var aleatorio = Math.floor(Math.random() * arr.length)
      this.alumnos.push({
        codA: faker.datatype.uuid(),
        contrasenia: faker.internet.password(),
        dni: Math.floor(Math.random() * (99999999 - 40000000)) + 40000000,
        apellidoP: faker.name.lastName(),
        apellidoM: faker.name.lastName(),
        nombreA: faker.name.firstName(),
        fechaNaciA: faker.datatype.datetime(),
        sexoA: arr[aleatorio],
        direccion: faker.address.streetSuffix(),
      });
    }
  }

  async create(alumno) {
    let nuevoAlumno = {
      codA: faker.datatype.uuid(),
      ...alumno
    }
    this.alumnos.push(nuevoAlumno)
    return nuevoAlumno
  }
  async update(id, alumno) {
    const posAlumno = this.alumnos.findIndex(item => item.codA == id)
    if (posAlumno === -1) {
      throw boom.notFound("No se encuentra alumno")
    }
    this.alumnos[posAlumno] = alumno
    return this.alumnos[posAlumno]
  }

  async updateParcial(id, alumnoParcial) {
    const posAlumno = this.alumnos.findIndex(item => item.codA == id)
    if (posAlumno === -1) {
      throw boom.notFound("No se encuentra alumno")
    }
    const alumno = this.alumnos[posAlumno]
    this.alumnos[posAlumno] = {
      ...alumno,
      ...alumnoParcial
    }
    return this.notas[posAlumno]
  }

  async delete(id) {
    const posAlumno = this.alumnos.findIndex(item => item.codA == id)
    if (posAlumno === -1) {
      throw boom.notFound("No se encuentra alumno")
    }
    this.alumnos.splice(posAlumno, 1)
    return {
      mensaje: 'Se elimino alumno',
      id
    }
  }

  async findAll() {
    return this.alumnos
  }

  async findBy(id) {
    const alumno = this.alumnos.find(item => item.codA == id)
    if (!alumno) {
      throw boom.notFound("No se encuentra alumno")
    }
    return alumno
  }
}

module.exports = AlumnoServices
