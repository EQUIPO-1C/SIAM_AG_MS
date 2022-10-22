export const asignaturainscritasTypeDef=`
type pruebaAsignaturainscritas{
    isWorking: String
}
type asignaturainscritasMapTuple {
    key: String
    value: String
}
type Asignaturasinscritas{
    codigo_asignatura: Int
    Nombre_Asignatura: string
    Numero_Grupo_Asignatura: Int
    Creditos_Asignatura: Int
    Horas_Asignatura: string
    Facultad_Asignatura: string
    Ubicacion_Asignatura : string
    
}



type AsignaturasinscritasID{
    codigo_asignatura: Int
    Nombre_Asignatura: string
    Numero_Grupo_Asignatura: Int
    Creditos_Asignatura: Int
    Horas_Asignatura: string
    Facultad_Asignatura: string
    Ubicacion_Asignatura : string
    
}

input AsignaturasinscritasInput{
    codigo_asignatura: Int
    Nombre_Asignatura: string
    Numero_Grupo_Asignatura: Int
    Creditos_Asignatura: Int
    Horas_Asignatura: string
    Facultad_Asignatura: string
    Ubicacion_Asignatura : string

}
type retornoDeleteAsignaturasinscritas{
    success: String
}

`;

export const asignaturasinscritasMutations=`
createSiamAsignaturainscritas(inputAsignaturainscritas: AsignaturasinscritasInput): Asignaturasinscritas
updateSiamAsignaturainscritasByID(idU: Int, inputAsignaturainscritasU: AsignaturasinscritasInput): Asignaturasinscritas
deleteSiamAsignaturainscritasByID(idD: Int!): retornoDeleteAsignaturasinscritas
`;
export const asignaturasinscritasQueries = `
    pruebaAsignaturainscritasServicios: pruebaAsignaturainscritas
    allAsignaturasinscritas: [Asignaturasinscritas]!
    asignaturainscritasById(id: Int!): AsignaturasinscritasID!
`;





