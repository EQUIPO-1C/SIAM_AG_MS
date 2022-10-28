export const asignaturainscritasTypeDef=`
type Asignaturasinscritas{
    codigo_Asignatura: Int!
    nombre_Asignatura: String!
    numero_Grupo_Asignatura: Int!
    creditos_Asignatura: Int!
    horas_Asignatura: String!
    facultad_Asignatura: String!
    ubicacion_Asignatura: String!
}



type AsignaturasinscritasID{
    codigo_Asignatura: Int!
    nombre_Asignatura: String!
    numero_Grupo_Asignatura: Int!
    creditos_Asignatura: Int!
    horas_Asignatura: String!
    facultad_Asignatura: String!
    ubicacion_Asignatura: String!
    
}

input AsignaturasinscritasInput{
    codigo_Asignatura: Int!
    nombre_Asignatura: String!
    numero_Grupo_Asignatura: Int!
    creditos_Asignatura: Int!
    horas_Asignatura: String!
    facultad_Asignatura: String!
    ubicacion_Asignatura: String!
}

`;

export const asignaturasinscritasMutations=`

`;
export const asignaturasinscritasQueries = `

    allAsignaturasinscritas: [Asignaturasinscritas]
    asignaturainscritasById(id: Int!): AsignaturasinscritasID!
    
`;





