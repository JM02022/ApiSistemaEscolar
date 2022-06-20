const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class AdministradorServices {
  constructor() {

  }
  async create(administrador) {
    const {
      idAdmi,
      contrasenia,
      apellidoP,
      apellidoM,
      nombreAd,
      dni,
      sexoAd,
      celular,
      direccion,
      correo,
      rol
    } = administrador
    const salida = await models.administrador.create(administrador)
    return salida
  }

  async update(id, administrador) {
    const {
      contrasenia,
      apellidoP,
      apellidoM,
      nombreAd,
      dni,
      sexoAd,
      celular,
      direccion,
      correo,
      rol
    } = administrador
    const data = await models.administrador.update({
      contrasenia:contrasenia,
      apellidoP:apellidoP,
      apellidoM:apellidoM,
      nombreAd:nombreAd,
      dni:dni,
      sexoAd:sexoAd,
      celular:celular,
      direccion:direccion,
      correo:correo,
      rol:rol
      },
      {where:{idAdmi:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de administrador no encontrado')
    }
    return {
      idAdmi:id,
      ...administrador
    }
  }

  async updateParcial(id, administradorParcial) {
    const {
      contrasenia,
      apellidoP,
      apellidoM,
      nombreAd,
      dni,
      sexoAd,
      celular,
      direccion,
      correo,
      rol
    } = administradorParcial
    const data = await models.administrador.update({
      contrasenia:contrasenia,
      apellidoP:apellidoP,
      apellidoM:apellidoM,
      nombreAd:nombreAd,
      dni:dni,
      sexoAd:sexoAd,
      celular:celular,
      direccion:direccion,
      correo:correo,
      rol:rol
      },
      {where:{idAdmi:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de administrador no encontrado')
    }
    return {
      idAdmi:id,
      ...administradorParcial
    }
  }

  async delete(id) {
    const data = await models.administrador.destroy({
      where:{idAdmi:id},
    }) 
    if(!data){
      throw boom.notFound('dato de administrador no encontrado')
    }
    return{
      mensaje:"se elimino administrador"
    }
  }

  async findAll() {
    const data = await models.administrador.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.administrador.findByPk(id)
    if(!data){
      throw boom.notFound('dato de administrador no encontrado')
    }
    return data
  }
}

module.exports = AdministradorServices
