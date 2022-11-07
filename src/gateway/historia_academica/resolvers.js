import { generalRequest, getRequest } from '../../utilities.js';
import {entryPointHA, portHA, urlHA} from './server.js';
// import {send} from './send.js';

//url para historia academica ms
const URLHA = `http://${urlHA}:${portHA}/${entryPointHA}`;
const resolvers = {
	Query: {
		//Queries para historia academica
		allHAcademica: (_) =>
			getRequest(URLHA, ''),
		hAcademicaById: (_, { id , tdoc}) =>
			generalRequest(`${URLHA}/${id}?tdoc=${tdoc}`, 'GET'),
		hAcademicaByCarrera: (_,{idUser, codigoCarrera}) =>
			generalRequest(`${URLHA}/${idUser}/carreras/${codigoCarrera}`, 'GET')
	},
	Mutation: {
		//Mutaciones para historia academica
		createHAcademicaUser: (_, { historiaAcademicaUser }) =>
			generalRequest(`${URLHA}/`, 'POST', historiaAcademicaUser),
		updateHAcademicaUser: (_, { id, historiaAcademicaUser }) =>
			generalRequest(`${URLHA}/${id}`, 'PUT', historiaAcademicaUser),

		createHAcademicaCarrera: (_,{idUser, historiaAcademicaCarrera}) =>
			generalRequest(`${URLHA}/${idUser}/carreras`, 'POST', historiaAcademicaCarrera),
		// updateHAcademicaCarrera: (idUser, idCarrera, historiaAcademicaAsignaturaInput) =>
		// 	send(idUser, idCarrera,historiaAcademicaAsignaturaInput),
			
		createHAcademicaAsignatura: (_,{idUser, idCarrera, historiaAcademicaAsignatura}) =>
			generalRequest(`${URLHA}/${idUser}/carreras/${idCarrera}/asignaturas`, 'POST', historiaAcademicaAsignatura),
		updateHAcademicaAsignatura: (_,{idUser, idCarrera, idAsignatura, historiaAcademicaAsignatura}) =>
			generalRequest(`${URLHA}/${idUser}/carreras/${idCarrera}/asignaturas/${idAsignatura}`, 'PUT', historiaAcademicaAsignatura)
	}
};

export default resolvers;
