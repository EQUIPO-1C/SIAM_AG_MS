export const asignaturaTypeDef=`
type pruebaAsignatura{
    isWorking: String
}
type asignaturaMapTuple {
    key: String
    value: String
}
type Asignaturas{
    codigoasignatura: Int
    idProfesor: Int
    idEdificio: Int
    programa: [String]
    creditos: Int
    cupos: Int
    descripcion: String
    duracion: String
    fechaFinal: String
    fechaInicio: String
    horario: String
    jornada: String
    nivelDeEstudio: String
    sede: String
    tipologia: String
    prerequisitos: [asignaturaMapTuple]
    nombreAsignatura: String
    
}



type AsignaturasID{
    codigoasignatura: Int
    idProfesor: Int
    idEdificio: Int
    programa: [String]
    creditos: Int
    cupos: Int
    descripcion: String
    duracion: String
    fechaFinal: String
    fechaInicio: String
    horario: String
    jornada: String
    nivelDeEstudio: String
    sede: String
    tipologia: String
    prerequisitos:[String]
    
}

input AsignaturasInput{
    codigoasignatura: Int
    idProfesor: Int
    idEdificio: Int
    programa: [String]
    creditos: Int
    cupos: Int
    descripcion: String
    duracion: String
    fechaFinal: String
    fechaInicio: String
    horario: String
    jornada: String
    nivelDeEstudio: String
    sede: String
    tipologia: String
    prerequisitos:[String]
    nombreAsignatura: String

}
type retornoDeleteAsignatura{
    success: String
}

`;

export const asignaturaMutations=`
createSiamAsignatura(inputAsignatura: AsignaturasInput): Asignaturas
updateSiamAsignaturaByID(idU: Int, inputAsignaturaU: AsignaturasInput): Asignaturas
deleteSiamAsignaturaByID(idD: Int!): retornoDeleteAsignatura
`;
export const asignaturaQueries = `
    pruebaAsignaturaServicios: pruebaAsignatura
    allAsignaturas: [Asignaturas]!
    asignaturaById(id: Int!): AsignaturasID!
`;





