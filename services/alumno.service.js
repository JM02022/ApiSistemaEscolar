const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class AlumnoServices {
  constructor() {}
  async create(alumno) {
    const {
      idAlumno,
      contrasenia,
      dni,
      apellidoP,
      apellidoM,
      nombre,
      fechaNacimiento,
      sexoA,
      direccion,
      nroNumeroCelular
    } = alumno
    const salida = await models.alumno.create(alumno)
    return salida
  }

  async update(id, alumno) {
    const {
      contrasenia,
      dni,
      apellidoP,
      apellidoM,
      nombre,
      fechaNacimiento,
      sexoA,
      direccion,
      nroNumeroCelular
    } = alumno
    const data = await models.alumno.update({
      contrasenia:contrasenia,
      dni:dni,
      apellidoP:apellidoP,
      apellidoM:apellidoM,
      nombre:nombre,
      fechaNacimiento:fechaNacimiento,
      sexoA:sexoA,
      direccion:direccion,
      nroNumeroCelular:nroNumeroCelular
    },{where: {idAlumno: id}
    })
    if (data == 0) {
      throw boom.notFound('alumno no encontrado')
    }
    return {
      idAlumno: id,
      ...alumno
    }
  }

  async updateParcial(id, alumnoParcial) {
    const {
      contrasenia,
      dni,
      apellidoP,
      apellidoM,
      nombre,
      fechaNacimiento,
      sexoA,
      direccion,
      nroNumeroCelular
    } = alumnoParcial
    const data = await models.alumno.update({
      contrasenia:contrasenia,
      dni:dni,
      apellidoP:apellidoP,
      apellidoM:apellidoM,
      nombre:nombre,
      fechaNacimiento:fechaNacimiento,
      sexoA:sexoA,
      direccion:direccion,
      nroNumeroCelular:nroNumeroCelular
    },{where: {idAlumno: id}
    })
    if (data == 0) {
      throw boom.notFound('alumno no encontrado')
    }
    return {
      idAlumno: id,
      ...alumnoParcial
    }
  }

  async delete(id) {
    const data = await models.alumno.destroy({
      where: {
        idAlumno: id
      }
    })
    if (!data) {
      throw boom.notFound('Alumno no encontrado')
    }
    return {
      mensaje: "Se elimino alumno"
    }
  }

  async findAll() {
    const data = await models.alumno.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.alumno.findByPk(id)
    if (!data) {
      throw boom.notFound('Alumno no encontrado')
    }
    return data
  }

}

module.exports = AlumnoServices
