const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class NotaServices {
    constructor() {

    }
    async create(nota) {
        const {
            idNota,
            nota1,
            nota2,
            nota3,
            promedio,
            idAlumno,
            idCursoDetalle
        } = nota
        const salida = await models.nota.create(nota)
        return salida
    }
  
    async update(id, nota) {
      const {
        nota1,
        nota2,
        nota3,
        promedio,
        idAlumno,
        idCursoDetalle
      } = nota
      const data = await models.nota.update({
        nota1,
        nota2,
        nota3,
        promedio,
        idAlumno,
        idCursoDetalle
        },
        {where:{idNota:id}}
      )
      if(data == 0){
          throw boom.notFound('dato de curso no encontrado')
      }
      return {
        idNota:id,
        ...nota
      }
    }
  
    async updateParcial(id, notaParcial) {
      const {
        nota1,
        nota2,
        nota3,
        promedio,
        idAlumno,
        idCursoDetalle
      } = notaParcial
      const data = await models.nota.update({
        nota1,
        nota2,
        nota3,
        promedio,
        idAlumno,
        idCursoDetalle
        },
        {where:{idNota:id}}
      )
      if(data == 0){
          throw boom.notFound('dato de nota no encontrado')
      }
      return {
        idNota:id,
        ...notaParcial
      }
    }
  
    async delete(id) {
      const data = await models.nota.destroy({
        where:{idNota:id},
      }) 
      if(!data){
        throw boom.notFound('dato de nota no encontrado')
      }
      return{
        mensaje:"se elimino nota"
      }
    }
  
    async findAll() {
      const data = await models.nota.findAll();
      return data;
    }
    async findBy(id) {
      const data = await models.nota.findByPk(id)
      if(!data){
        throw boom.notFound('dato de nota no encontrado')
      }
      return data
    }
}

module.exports = NotaServices
