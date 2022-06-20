const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')

class AulaServices {
  constructor() {

  }
  async create(aula) {
    const {
      codAu,
      capacidadA,
      numeroAula,
      piso
    } = aula
    const salida = await models.aula.create(aula)
    return salida
  }

  async update(id, aula) {
    const {
      capacidadA,
      numeroAula,
      piso
    } = aula
    const data = await models.aula.update({
      capacidadA:capacidadA,
      numeroAula:numeroAula,
      piso:piso
      },
      {where:{codAu:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de aula no encontrado')
    }
    return {
      codAu:id,
      ...aula
    }
  }

  async updateParcial(id, aulaParcial) {
    const {
      capacidadA,
      numeroAula,
      piso
    } = aulaParcial
    const data = await models.aula.update({
      capacidadA:capacidadA,
      numeroAula:numeroAula,
      piso:piso
      },
      {where:{codAu:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de aula no encontrado')
    }
    return {
      codAu:id,
      ...aulaParcial
    }
  }

  async delete(id) {
    const data = await models.aula.destroy({
      where:{codAu:id},
    }) 
    if(!data){
      throw boom.notFound('dato de aula no encontrado')
    }
    return{
      mensaje:"se elimino aula"
    }
  }

  async findAll() {
    const data = await models.aula.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.aula.findByPk(id)
    if(!data){
      throw boom.notFound('dato de aula no encontrado')
    }
    return data
  }
}

module.exports = AulaServices
