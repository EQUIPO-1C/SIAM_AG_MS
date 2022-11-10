import { generalRequest, getRequest } from '../../utilities.js';
import { entryPoint, port, url } from './server.js';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		horarioAll: (_) =>
			generalRequest(`${URL}schedules`, 'GET'),
        horarioByID: (_, { id }) =>
			generalRequest(`${URL}schedule/${id}`, 'GET'),
	},
	Mutation: {
		updateHorario: (_, { id, inputHorario }) =>
			generalRequest(`${URL}schedule/${id}`,  'PUT', inputHorario),
		createHorario: (_, {inputHorario }) =>
			generalRequest(`${URL}schedule`,  'POST', inputHorario),
		deleteHorario: (_, { id }) =>
			generalRequest(`${URL}schedule/${id}`,  'DELETE')	
	}
};

export default resolvers;