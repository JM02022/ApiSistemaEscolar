const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const DOCENTE_TABLE = 'TDocente'

const DocenteSchema = {
    codD: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
    contraseniaD: {
        allowNull:false,
        field: 'contrasenia',
        type:DataTypes.STRING
    },
    nombreD: {
        allowNull:false,
        field: 'nombre_Docente',
        type: DataTypes.STRING
    },
    apellidoP: {
        allowNull:false,
        field: 'apellidoP_Docente',
        type:DataTypes.STRING
    },
    apellidoM: {
        allowNull:false,
        field: 'apellidoM_Docente',
        type:DataTypes.STRING,
    },
    dniD: {
        allowNull:false,
        field: 'dni_Docente',
        type:DataTypes.STRING,
    },
    fechaNaciD: {
        allowNull:false,
        field: 'fecha_Nacimiento_Docente',
        type:DataTypes.DATE
    },
    correo: {
        allowNull:false,
        field: 'correo_Docente',
        type:DataTypes.STRING
    },
    nroCelularD: {
        allowNull:false,
        field: 'nroCelular_Docente',
        type:DataTypes.STRING,
    },
    sexoD: {
        allowNull:false,
        field: 'sexo_Docente',
        type:DataTypes.STRING,
    },
    direccionD: {
        allowNull:false,
        field: 'direccion_Docente',
        type:DataTypes.STRING,
    },
    rol:{
        allowNull: false,
        field: 'rol_docente',
        type: DataTypes.STRING
    }
    
}
class Docente extends Model {
    static associate(models) {
        this.belongsToMany(models.curso,{
            through: models.cursoDetalle,
            as: 'curso',
            foreignKey: 'codD'
        }); 
        this.hasMany(models.asistencia,{
            foreignKey: 'codD'
        })
    }
    static config(sequelize) {
      return {
        sequelize,
        tableName: DOCENTE_TABLE,
        modelName: 'docente',
        timestamps: false
      }
    }
  }
  module.exports = {
    DOCENTE_TABLE,
    DocenteSchema,
    Docente
  }