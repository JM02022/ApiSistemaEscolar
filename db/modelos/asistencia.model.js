const sequelize = require('sequelize')
const {
  Model,
  Sequelize,
  DataTypes
} = require('sequelize')

const ASISTENCIA_TABLE = 'TAsistencia'

const AsistenciaSchema = {
  codAs: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  fechaRegistro: {
    allowNull: false,
    field: 'fecha_Asistencia',
    type: DataTypes.DATE,
  },
  estadoAsistencia: {
    allowNull: false,
    field: 'estado_Asistencia',
    type: DataTypes.STRING,
  },
  codD: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'TDocente'
    }
  },
  idAlumno: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'TAlumno'
    }
  },
}
class Asistencia extends Model {
  static associate(models) {
    this.belongsTo(models.docente, {
      as: 'docente'
    });
    this.belongsTo(models.alumno, {
      as: 'alumno'
    })
    
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ASISTENCIA_TABLE,
      modelName: 'asistencia',
      timestamps: false
    }
  }
}
module.exports = {
  ASISTENCIA_TABLE,
  AsistenciaSchema,
  Asistencia
}
