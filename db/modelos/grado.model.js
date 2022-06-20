const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const GRADO_TABLE = 'TGrado'

const GradoSchema = {
    idGrado: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nrogrado: {
        allowNull:false,
        type:DataTypes.STRING,
     
    }
}
class Grado extends Model {
    static associate(models){
        this.hasMany(models.matricula,{
            foreignKey: 'idGrado'
        })
        this.hasMany(models.horario,{
            foreignKey: 'idGrado'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: GRADO_TABLE,
            modelName: 'grado',
            timestamps: false
        }
    }
}
module.exports = {GRADO_TABLE,GradoSchema,Grado}
