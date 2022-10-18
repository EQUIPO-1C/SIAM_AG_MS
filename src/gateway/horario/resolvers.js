import { generalRequest, getRequest } from '../../utilities.js';
import { entryPoint, port, url } from './server.js';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
        horarioByID: (_, { id }) =>
			generalRequest(`${URL}schedule/${id}`, 'GET'),
	},
	Mutation: {
		
	}
};

export default resolvers;