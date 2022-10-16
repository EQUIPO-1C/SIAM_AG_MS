export const lugarTypeDef=`
type Lugares{
    idEdificio: Int
    facultad: String
    salon: String

}

type LugaresID{
    idEdificio: Int
    facultad: String
    salon: String

}

type LugaresPrueba{
    isWorking: String

}


`;

export const lugarMutations=``;
export const lugarQueries = `
    allLugares: [Lugares]
    lugaresByID(id: Int!): LugaresID
    pruebaLugaresServicios: LugaresPrueba
`;



