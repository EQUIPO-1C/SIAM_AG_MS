export const asignaturaTypeDef=`
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
    
}

type prerequisitosMap{
    key: Int
    value: String
}
`;

export const asignaturaMutations=``;
export const asignaturaQueries = `
    allAsignaturas: [Asignaturas]!
    
`;





