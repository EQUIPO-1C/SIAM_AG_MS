import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointP, portP, urlP } from './server.js';
//url profesores asignatura_ms

const URLP = `http://${urlP}:${portP}/${entryPointP}`;

const resolvers = {
    Query: {
        //Queries profesores
        allProfesores: (_) => generalRequest(`${URLP}/profesores`, 'GET'),
        profesoresByID:(_, { id ,}) => generalRequest(`${URLP}/profesor/${id}`, 'GET'),
        pruebaProfesoresServicios: (_) => generalRequest(`${URLP}/healthcheckProfesores`, 'GET')

    },

    Mutation: {

    }
};

export default resolvers;