const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
class HorarioServices {
    async create(horario) {
        const {
            idHorario,
            hora,
            idCursoDetalle,
            codAu,
            idGrado
        } = horario
        const salida = await models.horario.create(administrador)
        return salida
      }
    
      async update(id, horario) {
        const {
           
            hora,
            idCursoDetalle,
            codAu,
            idGrado
        } = horario
        const data = await models.horario.update({
          
            hora:hora,
            idCursoDetalle:idCursoDetalle,
            codAu:codAu,
            idGrado:idGrado
          },
          {where:{idHorario:id}}
        )
        if(data == 0){
            throw boom.notFound('dato de horario no encontrado')
        }
        return {
            idHorario:id,
          ...horario
        }
      }
    
      async update(id, horarioParcial) {
        const {
           
            hora,
            idCursoDetalle,
            codAu,
            idGrado
        } = horarioParcial
        const data = await models.horario.update({
          
            hora:hora,
            idCursoDetalle:idCursoDetalle,
            codAu:codAu,
            idGrado:idGrado
          },
          {where:{idHorario:id}}
        )
        if(data == 0){
            throw boom.notFound('dato de horario no encontrado')
        }
        return {
            idHorario:id,
          ...horarioParcial
        }
      }
    
      async delete(id) {
        const data = await models.horario.destroy({
          where:{idHorario:id},
        }) 
        if(!data){
          throw boom.notFound('dato de horario no encontrado')
        }
        return{
          mensaje:"se elimino horario"
        }
      }
    
      async findAll() {
        const data = await models.horario.findAll();
        return data;
      }
      async findBy(id) {
        const data = await models.horario.findByPk(id)
        if(!data){
          throw boom.notFound('dato de horario no encontrado')
        }
        return data
      }
}

module.exports = HorarioServices
