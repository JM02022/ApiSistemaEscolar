const sequelize = require('sequelize')
const {
  Model,
  Sequelize,
  DataTypes
} = require('sequelize')

const MATRICULA_TABLE = 'TMatricula'

const MatriculaSchema = {
  idMatricula: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  fecha: {
    allowNull: false,
    field: 'matricula',
    type: DataTypes.DATE,
  },
  pagoMatricula: {
    allowNull: false,
    field: 'matricula',
    type: DataTypes.DECIMAL,
  },
  idGrado: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'TGrado'
    }
  },
  idAlumno: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'TAlumno'
    }
  },
  idAdmi: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'TAdministrador'
    }
  }
}

class Matricula extends Model {
  static associate(models) {
    this.belongsTo(models.grado, {
      as: 'grado'
    });
    this.belongsTo(models.alumno, {
      as: 'alumno'
    });
    this.belongsTo(models.administrador, {
      as: 'administrador'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MATRICULA_TABLE,
      modelName: 'matricula',
      timestamps: false
    }
  }
}

module.exports = {MATRICULA_TABLE,MatriculaSchema,Matricula}
