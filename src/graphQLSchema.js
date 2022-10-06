import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities.js';

//Autorizacion
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
		hAcademicaTypeDef
	],
	[
		authQueries,
		hAcademicaQueries
	],
	[
		authMutations,
		hAcademicaMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		authResolvers,
		hAcademicaResolvers
	)
});
