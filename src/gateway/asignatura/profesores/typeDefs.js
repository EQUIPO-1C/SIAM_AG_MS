export const profesorTypeDef=`
type Profesores{
    idProfesor: Int
	primerNombre: String
	segundoNombre: String
	primerApellido: String
	segundoApellido: String

}
type ProfesoresID{
    idProfesor: Int
	primerNombre: String
	segundoNombre: String
	primerApellido: String
	segundoApellido: String

}

type ProfesoresPrueba{
    isWorking: String
	
}
input ProfesoresInput{
    idProfesor: Int
	primerNombre: String
	segundoNombre: String
	primerApellido: String
	segundoApellido: String

}
type retornoDeleteProfesor{
    success: String
}

`;

export const profesorMutations=`
createSiamProfesor(inputProfesor: ProfesoresInput): Profesores
updateSiamProfesoresByID(idU: Int, inputProfesorU: ProfesoresInput): Profesores
deleteSiamprofesoresByID(idD: Int!): retornoDeleteProfesor

`;
export const profesorQueries = `
    allProfesores: [Profesores]
    profesoresByID(id: Int!): ProfesoresID
    pruebaProfesoresServicios: ProfesoresPrueba
`;
