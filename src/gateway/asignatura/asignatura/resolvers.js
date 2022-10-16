import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointA, portA, urlA } from './server.js';
//url para historia academica ms
const URLA = `http://${urlA}:${portA}/${entryPointA}`;

const resolvers = {
    Query: {
        //Queries para historia academica
        allAsignaturas: (_) =>
        generalRequest(`${URLA}/asignaturas`, 'GET')

    },

    Mutation: {

    }
};

export default resolvers;
