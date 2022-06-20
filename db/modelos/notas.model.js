const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const NOTAS_TABLE = 'TNotas'

const NotasSchema = {
    idNota: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
    nota1: {
        allowNull:false,
        field: 'nota1',
        type:DataTypes.DECIMAL,
    },
    nota2: {
        allowNull:false,
        field: 'nota2',
        type:DataTypes.DECIMAL,
    },
    nota3: {
      allowNull: false,
      field: 'nota3',
      type: DataTypes.DECIMAL
    },
    promedio: {
      allowNull: false,
      field: 'promedio',
      type: DataTypes.DECIMAL,
    },
    idAlumno: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'TAlumno'
      }
    },
    idCursoDetalle: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'TCursoDetalle'
      }
    }
}
class Notas extends Model {
    static associate(models){
        this.belongsTo(models.alumno, {
            as: 'alumno'
        });
        this.belongsTo(models.cursoDetalle,{
            as:'cursoDetalle'
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: NOTAS_TABLE,
            modelName: 'nota',
            timestamps: false
        }
    }
}
module.exports = {
  NOTAS_TABLE,
  NotasSchema,
  Notas
}