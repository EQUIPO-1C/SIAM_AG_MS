export const profesorTypeDef=`
type Profesores{
    idProfesor: Int
	primerNombre: String
	segundoNombre: String
	primerApellido: String
	segundoApellido: String

}
`;

export const profesorMutations=``;
export const profesorQueries = `
    allProfesores: [Profesores]
`;
