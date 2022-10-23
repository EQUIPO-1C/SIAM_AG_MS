export const profesorinTypeDef=`

type profesorin{
    iD_Profesor : Int!
    codigo_Asignatura : Int!
    nombre_Profesor : String!
    facultad_Profesor : String!
    
}



type profesorinID{
    iD_Profesor : Int!
    codigo_Asignatura : Int!
    nombre_Profesor : String!
    facultad_Profesor : String!
}

input profesorinInput{
    iD_Profesor : Int!
    codigo_Asignatura : Int!
    nombre_Profesor : String!
    facultad_Profesor : String!

`;

export const profesorinMutations=`

`;
export const profesorinQueries = `
    allprofesorcalifacionesin : [profesorin]
    profesorcalifacionesinById(id: Int!) : profesorinID
`;





