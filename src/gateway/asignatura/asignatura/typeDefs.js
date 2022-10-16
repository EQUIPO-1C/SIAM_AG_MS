export const asignaturaTypeDef=`
type pruebaAsignatura{
    isWorking: String
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
    prerequisitos:[String]
    nombreAsignatura: String
    
}

type prerequisitosMap{
    key: Int
    value: String
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

`;

export const asignaturaMutations=`
createSiamAsignatura(inputAsignatura: AsignaturasInput): Asignaturas

`;
export const asignaturaQueries = `
    pruebaAsignaturaServicios: pruebaAsignatura
    allAsignaturas: [Asignaturas]!
    asignaturaById(id: Int!): AsignaturasID!

    
`;





