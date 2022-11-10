import { generalRequest, getRequest } from '../../utilities.js';
import { entryPoint, port, url } from './server.js';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		procInsAll: (_) =>
			generalRequest(`${URL}/process`, 'GET'),
        procInsByID: (_, { id }) =>
			generalRequest(`${URL}/proc/${id}`, 'GET'),
	},
	Mutation: {
		// updateProcIns: (_, { id, inputHorario }) =>
		// 	generalRequest(`${URL}schedule/${id}`,  'PUT', inputHorario),
		// createProcIns: (_, {inputHorario }) =>
		// 	generalRequest(`${URL}schedule`,  'POST', inputHorario),
		// // deleteProcIns: (_, { id }) =>
		// // 	generalRequest(`${URL}schedule/${id}`,  'DELETE')
		
	}
};

export default resolvers;