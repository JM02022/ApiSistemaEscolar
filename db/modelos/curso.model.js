const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const CURSO_TABLE = 'TCurso'

const CursoSchema = {
    codigoC: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
    nombre: {
        allowNull: false,
        field: 'nombre_Curso',
        type: DataTypes.STRING
    },
    descripcion: {
      allowNull: false,
      field: 'descripcion_curso',
      type: DataTypes.STRING
    },
    imagen:{
      allowNull:false,
      field: 'imagen_curso',
      type: DataTypes.STRING
    }
}
class Curso extends Model {
    static associate(models) {
        this.belongsToMany(models.docente,{
          through:models.cursoDetalle,
          as:'docente',
          foreignKey: 'codigoC'
        })
    }
    static config(sequelize) {
      return {
        sequelize,
        tableName: CURSO_TABLE,
        modelName: 'curso',
        timestamps: false
      }
    }
  }
  module.exports = {
    CURSO_TABLE,
    CursoSchema,
    Curso
  }
    