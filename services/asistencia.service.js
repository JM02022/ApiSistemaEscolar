const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class AsistenciaServices {
  constructor() {}
  async create(asistencia) {
    const {
      codAs,
      fechaRegistro,
      estadoAsistencia,
      codD,
      idAlumno
    } = asistencia
    const salida = await models.asistencia.create(asistencia)
    return salida
  }

  async update(id, asistencia) {
    const {
      fechaRegistro,
      estadoAsistencia,
      codD,
      idAlumno
    } = asistencia
    const data = await models.asistencia.update({
      fechaRegistro:fechaRegistro,
      estadoAsistencia:estadoAsistencia,
      codD:codD,
      idAlumno:idAlumno
    }, {
      where: {
        codAs: id
      }
    })
    if (data == 0) {
      throw boom.notFound('asistencia no encontrada')
    }
    return {
      codAs: id,
      ...asistencia
    }
  }

  async updateParcial(id, asistenciaParcial) {
    const {
      fechaRegistro,
      estadoAsistencia,
      codD,
      idAlumno
    } = asistenciaParcial
    const data = await models.asistencia.update({
      fechaRegistro:fechaRegistro,
      estadoAsistencia:estadoAsistencia,
      codD:codD,
      idAlumno:idAlumno
    }, {
      where: {
        codAs: id
      }
    })
    if (data == 0) {
      throw boom.notFound('asistencia no encontrada')
    }
    return {
      codAs: id,
      ...asistenciaParcial
    }
  }

  async delete(id) {
    const data = await models.asistencia.destroy({
      where: {
        codAs: id
      },
    })
    if (!data) {
      throw boom.notFound('asistencia no encontrada')
    }
    return {
      mensaje: "se elimino asistencia"
    }
  }

  async findAll() {
    const data = await models.asistencia.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.asistencia.findByPk(id)
    if (!data) {
      throw boom.notFound('asistencia no encontrada')
    }
    return data
  }

}

module.exports = AsistenciaServices;
