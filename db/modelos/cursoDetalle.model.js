const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const CURSODETALLE_TABLE = 'TCursoDetalle'

const CursoDetalleSchema = {
    idCursoDetalle: {
        primaryKey: true,
        type: DataTypes.STRING,
    }
}

class CursoDetalle extends Model {
  static associate(models) {
    this.hasMany(models.nota,{
      foreignKey: 'idCursoDetalle'
    });
    this.hasMany(models.horario,{
      foreignKey: 'idCursoDetalle'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CURSODETALLE_TABLE,
      modelName: 'cursoDetalle',
      timestamps: false
    }
  }
}

module.exports = {
  CURSODETALLE_TABLE,
  CursoDetalleSchema,
  CursoDetalle
}