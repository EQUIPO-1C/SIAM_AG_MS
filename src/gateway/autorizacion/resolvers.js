import { generalRequest, getRequest } from '../../utilities.js';
import {entryPoint, port, url} from './server.js';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
	},
	Mutation: {
		createSiamUser: (_, { siamUser }) =>
		generalRequest(`${URL}/signUp`, 'POST', siamUser),
		loginSiamUser: (_, { siamLogin }) =>
		generalRequest(`${URL}/login`, 'POST', siamLogin),
		verifyToken: (_, { jwt }) => {
			const headers = {
				Authorization: jwt
			};
			return generalRequest(`${URL}/verifyToken`, 'POST',_, headers)
		},
	}
};

export default resolvers;