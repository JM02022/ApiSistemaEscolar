const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class DocenteServices {
  constructor() {

  }
  async create(docente) {
    const {
      codD,
      contraseniaD,
      apellidoPD,
      apellidoMD,
      nombreD,
      correo,
      fechaNaciD,
      sexoD,
      nroCelularD,
      direccionD,
      rol
    } = docente
    const salida = await models.docente.create(docente)
    return salida
  }
  
  async update(id, docente) {
    const {
      contraseniaD,
      apellidoPD,
      apellidoMD,
      nombreD,
      correo,
      fechaNaciD,
      sexoD,
      nroCelularD,
      direccionD,
      rol
    } = docente
    const data = await models.docente.update({
      contraseniaD:contraseniaD,
      apellidoPD:apellidoPD,
      apellidoMD:apellidoMD,
      nombreD:nombreD,
      correo:correo,
      fechaNaciD:fechaNaciD,
      sexoD:sexoD,
      nroCelularD:nroCelularD,
      direccionD:direccionD,
      rol:rol
      },
      {where:{codD:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de docente no encontrado')
    }
    return {
      codD:id,
      ...docente
    }
  }

  async updateParcial(id, docenteParcial) {
    const {
      contraseniaD,
      apellidoPD,
      apellidoMD,
      nombreD,
      correo,
      fechaNaciD,
      sexoD,
      nroCelularD,
      direccionD,
      rol
    } = docenteParcial
    const data = await models.docente.update({
      contraseniaD:contraseniaD,
      apellidoPD:apellidoPD,
      apellidoMD:apellidoMD,
      nombreD:nombreD,
      correo:correo,
      fechaNaciD:fechaNaciD,
      sexoD:sexoD,
      nroCelularD:nroCelularD,
      direccionD:direccionD,
      rol:rol
      },
      {where:{codD:id}}
    )
    if(data == 0){
        throw boom.notFound('dato de docente no encontrado')
    }
    return {
      codD:id,
      ...docenteParcial
    }
  }


  async delete(id) {
    const data = await models.docente.destroy({
      where:{codD:id},
    }) 
    if(!data){
      throw boom.notFound('dato de docente no encontrado')
    }
    return{
      mensaje:"se elimino docente"
    }
  }

  async findAll() {
    const data = await models.docente.findAll();
    return data;
  }

  async findBy(id) {
    const data = await models.docente.findByPk(id)
    if(!data){
      throw boom.notFound('dato de docente no encontrado')
    }
    return data
  }
}

module.exports = DocenteServices
