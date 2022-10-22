export const asignaturainscritasTypeDef=`
type pruebaAsignaturainscritas{
    isWorking: String
}
type asignaturainscritasMapTuple {
    key: String
    value: String
}
type Calificacion{
    ID_Calificacion: Int
    Definitiva_Calificacion: Int
    Calificaciones_Calificacion: string
    Porcentajes_Calificaciones: string
    Horas_Asignatura: string
    ID_Estudiante: Int
    Codigo_Asignatura : Int
    
}



type CalificacionID{
    ID_Calificacion: Int
    Definitiva_Calificacion: Int
    Calificaciones_Calificacion: string
    Porcentajes_Calificaciones: string
    Horas_Asignatura: string
    ID_Estudiante: Int
    Codigo_Asignatura : Int
}

input CalificacionInput{
    ID_Calificacion: Int
    Definitiva_Calificacion: Int
    Calificaciones_Calificacion: string
    Porcentajes_Calificaciones: string
    Horas_Asignatura: string
    ID_Estudiante: Int
    Codigo_Asignatura : Int
   
}
type retornoDeleteCalificacion{
    success: String
}

`;

export const CalificacionMutations=`
createSiamAsignaturainscritas(inputAsignaturainscritas: AsignaturasinscritasInput): Asignaturasinscritas
updateSiamAsignaturainscritasByID(idU: Int, inputAsignaturainscritasU: AsignaturasinscritasInput): Asignaturasinscritas
deleteSiamAsignaturainscritasByID(idD: Int!): retornoDeleteAsignaturasinscritas
`;
export const CalificacionQueries = `
    pruebaAsignaturainscritasServicios: pruebaAsignaturainscritas
    allAsignaturasinscritas: [Asignaturasinscritas]!
    asignaturainscritasById(id: Int!): AsignaturasinscritasID!
`;





