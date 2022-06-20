const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const HORARIO_TABLE= 'THorario'

const HorarioSchema = {
    idHorario: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
    hora: {
        allowNull: false,
        field: 'hora_horario',
        type: DataTypes.TIME,
        
    },
    idCursoDetalle: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model:'TCursoDetalle'//nombre de la tabla
        }
    },
    codAu: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model:'TAula'//nombre de la tabla
        }
    },
    idGrado: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model:'TGrado'//nombre de la tabla
        }
    }

}
class Horario extends Model {
    static associate(models) {
        this.belongsTo(models.cursoDetalle, {
            as: 'cursoDetalle'
        });
        this.belongsTo(models.aula, {
            as:'aula'
        });
        this.belongsTo(models.grado,{
            as:'grado'
        })

    }
    static config(sequelize) {
      return {
        sequelize,
        tableName: HORARIO_TABLE,
        modelName: 'horario',
        timestamps: false
      }
    }
  }
  module.exports = {HORARIO_TABLE,HorarioSchema,Horario}
