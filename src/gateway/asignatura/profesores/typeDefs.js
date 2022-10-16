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
`;

export const profesorMutations=``;
export const profesorQueries = `
    allProfesores: [Profesores]
    profesoresByID(id: Int!): ProfesoresID
    pruebaProfesoresServicios: ProfesoresPrueba
`;
