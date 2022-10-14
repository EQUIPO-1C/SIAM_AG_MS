import { generalRequest, getRequest } from '../../utilities.js';
import { entryPoint, port, url } from './server.js';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		verifyToken: (_, { jwt }) => {
			const headers = {
				Authorization: jwt
			};
			const xd = generalRequest(`${URL}/verifyToken`, 'GET', _, headers);
			return xd
		},
		getUserInfo: (_, { username }) =>{
			const body = {
				username: username
			};
			return generalRequest(`${URL}/getUserInfo`, 'GET', body)
		}
	},
	Mutation: {
		createSiamUser: (_, { siamUser }) =>
			generalRequest(`${URL}/signUp`, 'POST', siamUser),
		loginSiamUser: (_, { siamLogin }) =>
			generalRequest(`${URL}/login`, 'POST', siamLogin),
	}
};

export default resolvers;