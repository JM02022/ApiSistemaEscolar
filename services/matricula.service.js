const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class MatriculaServices {
  constructor() {}

  async create(matricula) {
    const {
      idMatricula,
      fecha,
      pagoMatricula,
      idGrado,
      idAlumno,
      idAdmi
    } = matricula
    const salida = await models.matricula.create(matricula)
    return salida
  }

  async update(id, matricula) {
    const {
        fecha,
        pagoMatricula,
        idGrado,
        idAlumno,
        idAdmi
    } = matricula
    const data = await models.matricula.update({
        fecha: fecha,
        pagoMatricula: pagoMatricula,
        idGrado: idGrado,
        idAlumno: idAlumno,
        idAdmi: idAdmi
    }, {where: {idMatricula: id}
    })
    if (data == 0) {
      throw boom.notFound('Matricula no encontrada')
    }
    return {
      idMatricula: id,
      ...matricula
    }
  }

  async updateParcial(id, matriculaParcial) {
    const {
      fecha,
      pagoMatricula,
      idGrado,
      idAlumno,
      idAdmi
    } = matriculaParcial
    const data = await models.matricula.update({
      fecha: fecha,
      pagoMatricula: pagoMatricula,
      idGrado: idGrado,
      idAlumno: idAlumno,
      idAdmi: idAdmi
    }, {
      where: {
        idMatricula: id
      }
    })
    if (data == 0) {
      throw boom.notFound('Matricula no encontrada')
    }
    return {
      idMatricula: id,
      ...matriculaParcial
    }
  }

  async delete(id) {
    const data = await models.matricula.destroy({
      where: {
        idMatricula: id
      }
    })
    if (!data) {
      throw boom.notFound('Matricula no encontrada')
    }
    return {
      mensaje: 'Se elimino la matricula'
    }
  }

  async findAll() {
    const data = await models.matricula.findAll();
    return data
  }

  async findBy(id) {
    const data = await models.matricula.findByPk(id)
    if (!data) {
      throw boom.notFound('Matricula no encontrada')
    }
    return data
  }
}

module.exports = MatriculaServices
