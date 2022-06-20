const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const ALUMNO_TABLE = 'TAlumno'

const AlumnoSchema = {
    idAlumno: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
    contrasenia: {
        allowNull:false,
        field: 'contrasenia_alumno',
        type:DataTypes.STRING,
    },
    nombre: {
        allowNull:false,
        field: 'nombre_alumno',
        type:DataTypes.STRING,
    },
    apellidoP: {
        allowNull:false,
        field: 'apellido_paterno',
        type:DataTypes.STRING
    },
    apellidoM: {
        allowNull:false,
        field: 'apellido_materno',
        type:DataTypes.STRING,
    },
    dni: {
        allowNull:false,
        field: 'dni_alumno',
        type:DataTypes.STRING
    },
    fechaNacimiento: {
        allowNull:false,
        field: 'fecha_nacimiento',
        type:DataTypes.DATE,
    },
    direccion: {
        allowNull:false,
        field: 'direccion_alumno',
        type:DataTypes.STRING,
    },
    nroNumeroCelular: {
        allowNull:false,
        field: 'nro_celular_alumno',
        type:DataTypes.STRING,
    },
    sexoA: {
        allowNull:false,
        field: 'sexo_alumno',
        type:DataTypes.STRING,
    },
}
class Alumno extends Model {
    static associate(models){
        this.hasMany(models.asistencia,{
            foreignKey: 'idAlumno'
        });
        this.hasMany(models.matricula,{
            foreignKey: 'idAlumno'
        });
        this.hasMany(models.nota,{
            foreignKey: 'idAlumno'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: ALUMNO_TABLE,
            modelName: 'alumno',
            timestamps: false
        }
    }
}
module.exports = {ALUMNO_TABLE,AlumnoSchema,Alumno}