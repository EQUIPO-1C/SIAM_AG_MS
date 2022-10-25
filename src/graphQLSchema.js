import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeSchemas } from './utilities.js';

//ProcesoInscripción

import {
	procesoInscripcionTypeDef,
	procesoInscripcionMutations,
	procesoInscripcionQueries
	
} from './gateway/proc_inscripcion/typeDefs.js';

//Profesores
import {
	profesorTypeDef,
	profesorMutations,
	profesorQueries
	
	
} from './gateway/asignatura/profesores/typeDefs.js';

import profesorResolvers from './gateway/asignatura/profesores/resolvers.js';


//Lugar
import {
	lugarMutations,
	lugarQueries,
	lugarTypeDef
} from './gateway/asignatura/lugar/typeDefs.js';

import lugarResolvers from './gateway/asignatura/lugar/resolvers.js';

//Asignaturas
import {
	asignaturaMutations,
	asignaturaQueries,
	asignaturaTypeDef
} from './gateway/asignatura/asignatura/typeDefs.js';

import asignaturaResolvers from './gateway/asignatura/asignatura/resolvers.js';

//autorización
import {
	authMutations,
	authQueries,
	authTypeDef
} from './gateway/autorizacion/typeDefs.js';

import authResolvers from './gateway/autorizacion/resolvers.js';

//Historia academica
import {
	hAcademicaTypeDef,
	hAcademicaQueries,
	hAcademicaMutations

} from './gateway/historia_academica/typeDefs.js';

import hAcademicaResolvers from './gateway/historia_academica/resolvers.js';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		authTypeDef,
		hAcademicaTypeDef,
		asignaturaTypeDef,
		lugarTypeDef,
		profesorTypeDef,
		procesoInscripcionTypeDef
		
	],
	[
		authQueries,
		hAcademicaQueries,
		asignaturaQueries,
		lugarQueries,
		profesorQueries,
		procesoInscripcionQueries
		

	],
	[
		authMutations,
		hAcademicaMutations,
		asignaturaMutations,
		lugarMutations,
		profesorMutations,
		procesoInscripcionMutations
		

	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		authResolvers,
		hAcademicaResolvers,
		asignaturaResolvers,
		lugarResolvers,
		profesorResolvers,
		
	
	)
});
