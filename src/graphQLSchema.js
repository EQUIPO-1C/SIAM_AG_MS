import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities.js';

import {
	categoryMutations,
	categoryQueries,
	categoryTypeDef

} from './siam_ag/categories/typeDefs.js';

import categoryResolvers from './siam_ag/categories/resolvers.js';

//Autorizacion
import {
	authMutations,
	authQueries,
	authTypeDef
} from './autorizacion/typeDefs.js';

import authResolvers from './autorizacion/resolvers.js';

//Historia academica
import {
	hAcademicaTypeDef,
	hAcademicaQueries,
	hAcademicaMutations

} from './historia_academica/typeDefs.js';

import hAcademicaResolvers from './historia_academica/resolvers.js';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		categoryTypeDef,
		authTypeDef,
    hAcademicaTypeDef
	],
	[
		categoryQueries,
		authQueries,
    hAcademicaQueries
	],
	[
		categoryMutations,
		authMutations,
    hAcademicaMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers,
		authResolvers,
		hAcademicaResolvers
	)
});
