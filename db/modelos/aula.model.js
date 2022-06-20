const sequelize = require('sequelize')
const {
  Model,
  Sequelize,
  DataTypes
} = require('sequelize')

const AULA_TABLE = 'TAula'

const AulaSchema = {
  codAu: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  capacidadA: {
    allowNull: false,
    field: 'capacidad_aula',
    type: DataTypes.STRING,
  },
  numeroAula: {
    allowNull: false,
    field: 'numero_aula',
    type: DataTypes.STRING,
  },
  piso: {
    allowNull: false,
    field: 'piso_aula',
    type: DataTypes.INTEGER,
  }
}
class Aula extends Model {
  static associate(models) {
      this.hasMany(models.horario,{
        foreignKey: 'codAu'
      })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: AULA_TABLE,
      modelName: 'aula',
      timestamps: false
    }
  }
}
module.exports = {
  AULA_TABLE,
  AulaSchema,
  Aula
}