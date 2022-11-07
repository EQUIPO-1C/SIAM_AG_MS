export const hAcademicaTypeDef = `
    type HistoriaAcademicaUser{
        _id: String!
        nombreEstudiante: String!
        tDocumento: String!
        ndocumento: Int!
        carreras: [HistoriaAcademicaCarrera]
    }
    input HistoriaAcademicaUserInput{
        nombreEstudiante: String!
        tDocumento: String!
        ndocumento: Int!
    }
    type HistoriaAcademicaCarrera{
      _id: String!
      nombre: String!
      codigo: Int! 
      promedio: Float!
      papa: Float!
      cDisiplinarOb: String!
      cDisiplinarOp: String
      cFundamentacionOb: String!
      cFundamentacionOp: String!
      cLibreEleccion: String!
      cTrabajoDeGrado: String!
      cNivelacion: String!
      porcentaje: Int!
      creditosAprobados: String!
      periodosCursados: String!
      creditos: Int!
      asignaturas: [HistoriaAcademicaAsignatura]
    }
    input HistoriaAcademicaCarreraInput{
      nombre: String!
      codigo: Int! 
      promedio: Float!
      papa: Float!
      cDisiplinarOb: String!
      cDisiplinarOp: String
      cFundamentacionOb: String!
      cFundamentacionOp: String!
      cLibreEleccion: String!
      cTrabajoDeGrado: String!
      cNivelacion: String!
      porcentaje: Int!
      creditosAprobados: String!
      periodosCursados: String!
      creditos: Int!
    }
    type HistoriaAcademicaAsignatura{
      _id: String!
      nombre: String!
      codigo: Int! 
      tipo: String!
      periodo: String!
      creditos: Int!
      calificacion: Float!
    }
    input HistoriaAcademicaAsignaturaInput{
      nombre: String!
      codigo: Int! 
      tipo: String!
      periodo: String!
      creditos: Int!
      calificacion: Float!
    }
    type Mensaje{
      msg: String!
    }
`;

export const hAcademicaQueries = `
    allHAcademica: [HistoriaAcademicaUser]!
    hAcademicaById(id: Int!, tdoc: String!): HistoriaAcademicaUser!
    hAcademicaByCarrera(idUser: String, codigoCarrera: Int!): HistoriaAcademicaCarrera!
`;

export const hAcademicaMutations = `
    createHAcademicaUser(historiaAcademicaUser: HistoriaAcademicaUserInput!): HistoriaAcademicaUser!
    updateHAcademicaUser(id: String!, historiaAcademicaUser: HistoriaAcademicaUserInput!): HistoriaAcademicaUser!

    createHAcademicaCarrera(idUser: String!, historiaAcademicaCarrera: HistoriaAcademicaCarreraInput!): HistoriaAcademicaCarrera!
    updateHAcademicaCarrera(idUser: Int!, tdoc: String!, idCarrera: Int!, historiaAcademicaAsignaturaInput: [HistoriaAcademicaAsignaturaInput]): Mensaje!

    createHAcademicaAsignatura(idUser: String!, idCarrera: String!, historiaAcademicaAsignatura: HistoriaAcademicaAsignaturaInput!): HistoriaAcademicaUser!
    updateHAcademicaAsignatura(idUser: String!, idCarrera: String!, idAsignatura: String!, historiaAcademicaAsignatura: HistoriaAcademicaAsignaturaInput!): HistoriaAcademicaAsignatura!
`;