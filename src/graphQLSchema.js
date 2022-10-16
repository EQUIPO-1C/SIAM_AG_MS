import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeSchemas } from './utilities.js';

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
		asignaturaTypeDef
	],
	[
		authQueries,
		hAcademicaQueries,
		asignaturaQueries
	],
	[
		authMutations,
		hAcademicaMutations,
		asignaturaMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		authResolvers,
		hAcademicaResolvers,
		asignaturaResolvers

	)
});
