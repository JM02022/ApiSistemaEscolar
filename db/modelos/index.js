const {ADMINISTRADOR_TABLE,AdministradorSchema,Administrador} = require('./administrador.model')
const {ALUMNO_TABLE,AlumnoSchema,Alumno} = require('./alumno.model')
const {ASISTENCIA_TABle,AsistenciaSchema,Asistencia} = require('./asistencia.model')
const {AULA_TABLE,AulaSchema,Aula} = require('./aula.model')
const {CURSO_TABLE,CursoSchema,Curso}= require('./curso.model')
const {CURSODETALLE_TABLE,CursoDetalleSchema,CursoDetalle} = require('./cursoDetalle.model')
const {DOCENTE_TABLE,DocenteSchema,Docente} = require('./docente.model')
const {GRADO_TABLE,GradoSchema,Grado} = require('./grado.model')
const {HORARIO_TABLE,HorarioSchema,Horario} = require('./horario.model')
const {MATRICULA_TABLE,MatriculaSchema,Matricula} = require('./matricula.model')
const {NOTAS_TABLE,NotasSchema,Notas} = require('./notas.model')

function setupModels(sequelize){
    Administrador.init(AdministradorSchema,Administrador.config(sequelize))//NO DEPENDE
    Alumno.init(AlumnoSchema,Alumno.config(sequelize))
    Asistencia.init(AsistenciaSchema,Asistencia.config(sequelize))
    Aula.init(AulaSchema,Aula.config(sequelize))//NO DEPENDE
    Curso.init(CursoSchema,Curso.config(sequelize))//NO DEPENDE
    CursoDetalle.init(CursoDetalleSchema,CursoDetalle.config(sequelize))
    Docente.init(DocenteSchema,Docente.config(sequelize))//NO DEPENDE
    Grado.init(GradoSchema,Grado.config(sequelize))//NO DEPENDE
    Horario.init(HorarioSchema,Horario.config(sequelize))
    Matricula.init(MatriculaSchema,Matricula.config(sequelize))
    Notas.init(NotasSchema,Notas.config(sequelize))
    //---------------------------------------------------
    Administrador.associate(sequelize.models)
    Alumno.associate(sequelize.models)
    Docente.associate(sequelize.models)
    Curso.associate(sequelize.models)
    Aula.associate(sequelize.models)
    Grado.associate(sequelize.models)
    CursoDetalle.associate(sequelize.models)
    
}

module.exports = {setupModels}

