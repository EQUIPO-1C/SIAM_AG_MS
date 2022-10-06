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
      asignaturas: [HistoriaAcademicaAsignatura]
    }
    input HistoriaAcademicaCarreraInput{
      nombre: String!
      codigo: Int! 
      promedio: Float!
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
    updateHAcademicaCarrera(idUser: String!, idCarrera: String!, historiaAcademicaCarrera: HistoriaAcademicaCarreraInput!): HistoriaAcademicaCarrera!

    createHAcademicaAsignatura(idUser: String!, idCarrera: String!, historiaAcademicaAsignatura: HistoriaAcademicaAsignaturaInput!): HistoriaAcademicaUser!
    updateHAcademicaAsignatura(idUser: String!, idCarrera: String!, idAsignatura: String!, historiaAcademicaAsignatura: HistoriaAcademicaAsignaturaInput!): HistoriaAcademicaAsignatura!
`;