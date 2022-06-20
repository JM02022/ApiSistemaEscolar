const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class GradoServices {
  constructor() {}

  async create(grado) {
    const {
      idGrado,
      nrogrado
    } = grado
    const salida = await models.grado.create(grado)
    return salida
  }

  async update(id, grado) {
    const {
      nrogrado
    } = grado

    const data = await models.grado.update({
      nrogrado: nrogrado
    },{where: {idGrado:id}
    })

    if(data==0) {
      throw boom.notFound('Grado no encontrado')
    }

    return {
      idGrado: id,
      ...grado
    }
  }

  async updateParcial(id, gradoParcial) {
    const {
      nrogrado
    } = gradoParcial

    const data = await models.grado.update({
      nrogrado: nrogrado
    },{where: {idGrado:id}
    })

    if(data==0) {
      throw boom.notFound('Grado no encontrado')
    }

    return {
      idGrado: id,
      ...gradoParcial
    }
  }

  async delete(id) {
    const data = await models.grado.destroy({
      where: {
        idGrado: id
      }
    })
    if (!data) {
      throw boom.notFound('Grado no encontrado')
    }
    return {
      mensaje: 'Se elimino grado'
    }
  }

  async findAll() {
    const data = await models.grado.findAll();
    return data
  }

  async findBy(id) {
    const data = await models.grado.findByPk(id)
    if (!data) {
      throw boom.notFound('Grado no encontrado')
    }
    return data
  }
}

module.exports = GradoServices