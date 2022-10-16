export const asignatura=`
type Asignaturas{
    codigoAsignatura: Int!
    idProfesor: Int!
    idEdficio: Int!
    programa: []!
    creditos: Int!
    cupos: Int!
    descripcion: String!
    duracion: String!
    fechafinal: String!
    fechainicio: String!
    horario: String!
    jornada: String!
    niveldeestudio: String!
    sede: String!
    tipologia: String!
    prerequisitos:[]
}

`;


export const asignaturasQueries = `
    allAsignaturas: [Asignaturas]!
    
`;





