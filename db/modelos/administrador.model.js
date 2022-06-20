const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const ADMINISTRADOR_TABLE = 'TAdministrador'

const AdministradorSchema = {
    idAdmi: {
        primaryKey: true,
        type: DataTypes.STRING,
     
    },
    contrasenia: {
        allowNull:false,
        field: 'contrasenia_Administrador',
        type:DataTypes.STRING,
    },
    nombreAd: {
        allowNull:false,
        field: 'nombre_Administrador',
        type:DataTypes.STRING,
    },
    apellidoP: {
        allowNull:false,
        field: 'apellidoP_Administrador',
        type:DataTypes.STRING,
    },
    apellidoM: {
        allowNull: false,
        field: 'apellidoM_Administrador',
        type: DataTypes.STRING,
    },
    dni: {
        allowNull: false,
        field: 'Dni_Administrador',
        type: DataTypes.STRING,
    },
    celular: {
        allowNull: false,
        field: 'celular_Administrador',
        type: DataTypes.STRING,
    },
    direccion: {
        allowNull: false,
        field: 'direccion_Administrador',
        type: DataTypes.STRING,
       
    },
    correo: {
        allowNull: false,
        field: 'correo_Administrador',
        type: DataTypes.STRING,
    },
    sexoAd: {
        allowNull: false,
        field: 'sexo_Administrador',
        type: DataTypes.STRING,
    },
    rol:{
        allowNull: false,
        field: 'rol_usuario',
        type: DataTypes.STRING
    }
}
class Administrador extends Model {
    static associate(models){
        this.hasMany(models.matricula,{
            foreignKey: 'idAdmi'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: ADMINISTRADOR_TABLE,
            modelName: 'administrador',
            timestamps: false
        }
    }
}
module.exports = {ADMINISTRADOR_TABLE,AdministradorSchema,Administrador}

