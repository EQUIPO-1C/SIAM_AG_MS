import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointL, portL, urlL } from './server.js';
//url lugares asignatura_ms

const URLL = `http://${urlL}:${portL}/${entryPointL}`;

const resolvers = {
    Query: {
        //Queries lugares
        allLugares: (_) =>
        generalRequest(`${URLL}/lugar`, 'GET')

    },

    Mutation: {

    }
};

export default resolvers;
