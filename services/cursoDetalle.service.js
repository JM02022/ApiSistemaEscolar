const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class cursoDetalleServices {
  constructor() {

  }
  async create(cursoDetalle) {
    const {
      idCursoDetalle,
      codigoC,
      codD
    } = cursoDetalle
    const salida = await models.cursoDetalle.create(cursoDetalle)
    return salida
  }

  async update(id, cursoDetalle) {
    const {
      codigoC,
      codD
    } = cursoDetalle
    const data = await models.cursoDetalle.update({
      codigoC,
      codD
      },
      {where:{idCursoDetalle:id}}
    )
    if(data == 0){
        throw boom.notFound('curso Detalle no encontrado')
    }
    return {
      idCursoDetalle:id,
      ...cursoDetalle
    }
  }

  async updateParcial(id, cursoDetalleParcial) {
    const {
      codigoC,
      codD
    } = cursoDetalleParcial
    const data = await models.cursoDetalle.update({
      codigoC,
      codD
      },
      {where:{idCursoDetalle:id}}
    )
    if(data == 0){
      throw boom.notFound('curso Detalle no encontrado')
    }
    return {
      idCursoDetalle:id,
      ...cursoDetalleParcial
    }
  }

  async delete(id) {
    const data = await models.cursoDetalle.destroy({
      where:{idAdmi:id},
    }) 
    if(!data){
      throw boom.notFound('curso Detalle no encontrado')
    }
    return{
      mensaje:"se elimino curso Detalle"
    }
  }

  async findAll() {
    const data = await models.cursoDetalle.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.cursoDetalle.findByPk(id)
    if(!data){
      throw boom.notFound('curso Detalle no encontrado')
    }
    return data
  }
}

module.exports = cursoDetalleServices
