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

input LugaresInput{
    idEdificio: Int
    facultad: String
    salon: String

}

type retornoDeleteLugar{
    success: String
}



`;

export const lugarMutations=`
createSiamLugar(inputLugar: LugaresInput): Lugares
updateSiamLugaresByID(idU: Int, inputLugarU: LugaresInput): Lugares
deleteSiamLugarByID(idD: Int!): retornoDeleteLugar

`;
export const lugarQueries = `
    allLugares: [Lugares]
    lugaresByID(id: Int!): LugaresID
    pruebaLugaresServicios: LugaresPrueba
`;



