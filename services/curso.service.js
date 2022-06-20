const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class CursoServices {
  constructor() {

  }
  async create(curso) {
    const {
      codigoC,
      nombre,
      descripcion,
      imagen,
    } = curso
    const salida = await models.curso.create(curso)
    return salida
  }

  async update(id, curso) {
    const {
      nombre,
      descripcion,
      imagen,
    } = curso
    const data = await models.curso.update({
      nombre,
      descripcion,
      imagen,
      },
      {where:{codigoC:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de curso no encontrado')
    }
    return {
      codigoC:id,
      ...curso
    }
  }

  async updateParcial(id, cursoParcial) {
    const {
      nombre,
      descripcion,
      imagen,
    } = cursoParcial
    const data = await models.curso.update({
      nombre,
      descripcion,
      imagen,
      },
      {where:{codigoC:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de curso no encontrado')
    }
    return {
      codigoC:id,
      ...curso
    }
  }

  async delete(id) {
    const data = await models.curso.destroy({
      where:{codigoC:id},
    }) 
    if(!data){
      throw boom.notFound('dato de curso no encontrado')
    }
    return{
      mensaje:"se elimino curso"
    }
  }

  async findAll() {
    const data = await models.curso.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.curso.findByPk(id)
    if(!data){
      throw boom.notFound('dato de curso no encontrado')
    }
    return data
  }
}

module.exports = CursoServices
