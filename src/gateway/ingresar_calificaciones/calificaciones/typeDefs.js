export const CalificacioninTypeDef=`

type Calificacionin{
    iD_Calificacion : Int!
    definitiva_Calificacion : Int!
    calificaciones_Calificacion : String!
    porcentajes_Calificaciones : String!
    iD_Estudiante : Int!
    codigo_Asignatura : Int!
}



type CalificacioninID{
    iD_Calificacion : Int!
    definitiva_Calificacion : Int!
    calificaciones_Calificacion : String!
    porcentajes_Calificaciones : String!
    iD_Estudiante : Int!
    codigo_Asignatura : Int!
}

input CalificacioninInput{
    iD_Calificacion : Int!
    definitiva_Calificacion : Int!
    calificaciones_Calificacion : String!
    porcentajes_Calificaciones : String!
    iD_Estudiante : Int!
    codigo_Asignatura : Int!
   
}
type calificacionesinByIDEst{
    iD_Calificacion : Int!
    definitiva_Calificacion : Int!
    calificaciones_Calificacion : String!
    porcentajes_Calificaciones : String!
    iD_Estudiante : Int
    codigo_Asignatura : Int
    nombre_Asignatura: String
    numero_Grupo_Asignatura: Int
    creditos_Asignatura: Int
    horas_Asignatura: String
    facultad_Asignatura: String
    ubicacion_Asignatura: String
}

`;

export const CalificacioninMutations=`
createSiamcalificacion(inputCalificacion: CalificacioninInput): Calificacionin
updateSiamcalificacionByID(idU: Int, inputCalificacion: CalificacioninInput): Calificacionin

`;
export const CalificacioninQueries = `
    allcalifacionesin: [Calificacionin]
    califacionesinById(id: Int!) : CalificacioninID
    calificacionesinByIDEst(iD :Int!): [calificacionesinByIDEst ]
`;
//calificacionesinByIDEst(iD_Estudiante:Int!):calificacionesinByIDEst
//calificacionesinByIDEst:[calificacionesinByIDEst]







