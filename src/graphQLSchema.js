import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeSchemas } from './utilities.js';

//ProcesoInscripción

import {
	procInsTypeDef,
	procInsQueries,
	procInsMutations
	
} from './gateway/procIns/typeDefs.js';

import procInsResolvers from './gateway/procIns/resolvers.js';


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

//Horario
import {
	horarioTypeDef,
	horarioQueries,
	horarioMutations

} from './gateway/horario/typeDefs.js';
import horarioResolvers from './gateway/horario/resolvers.js';
//asignaturas_inscritas

import {
	asignaturainscritasTypeDef,
	asignaturasinscritasMutations,
	asignaturasinscritasQueries


} from './gateway/asignaturas_inscritas/Asignatura_inscrita/typeDefs.js';
import asignaturas_inscritasResolvers from './gateway/asignaturas_inscritas/Asignatura_inscrita/resolvers.js';
//califiacionesin
import {
	CalificacioninTypeDef,
	CalificacioninMutations,
	CalificacioninQueries


} from './gateway/ingresar_calificaciones/calificaciones/typeDefs.js';
import CalificacioninResolvers from './gateway/ingresar_calificaciones/calificaciones/resolvers.js';

//profesorin
import {
	profesorinTypeDef,
	profesorinMutations,
	profesorinQueries


} from './gateway/ingresar_calificaciones/profesor/typeDefs.js';
import profesorinResolvers from './gateway/ingresar_calificaciones/profesor/resolvers.js';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		authTypeDef,
		hAcademicaTypeDef,
		asignaturaTypeDef,
		lugarTypeDef,
		profesorTypeDef,
		procInsTypeDef,
		horarioTypeDef
		horarioTypeDef,
		asignaturainscritasTypeDef,
		CalificacioninTypeDef,
		profesorinTypeDef
	],
	[
		authQueries,
		hAcademicaQueries,
		asignaturaQueries,
		lugarQueries,
		profesorQueries,
		procInsQueries,
		horarioQueries
		horarioQueries,
		asignaturasinscritasQueries,
		CalificacioninQueries,
		profesorinQueries
	],
	[
		authMutations,
		hAcademicaMutations,
		asignaturaMutations,
		lugarMutations,
		profesorMutations,
		procInsMutations,
		horarioMutations
		horarioMutations,
		asignaturasinscritasMutations,
		CalificacioninMutations,
		profesorinMutations
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
		horarioResolvers,
		procInsResolvers
		asignaturas_inscritasResolvers,
		CalificacioninResolvers,
		profesorinResolvers
	)
});
