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
`;

export const CalificacioninMutations=`
createSiamcalificacion(inputCalificacion: CalificacioninInput): Calificacionin
updateSiamcalificacionByID(idU: Int, inputCalificacion: CalificacioninInput): Calificacionin

`;
export const CalificacioninQueries = `
    allcalifacionesin: [Calificacionin]
    califacionesinById(id: Int!) : CalificacioninID

`;





