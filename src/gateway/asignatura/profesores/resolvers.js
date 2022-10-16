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
        createSiamProfesor: (_, {inputProfesor}) =>generalRequest(`${URLP}/profesor`, 'POST',inputProfesor),
        updateSiamProfesoresByID: (_, { idU, inputProfesorU }) =>generalRequest(`${URLP}/profesor/${idU}`, 'PUT', inputProfesorU),
        deleteSiamprofesoresByID: (_, { idD }) =>generalRequest(`${URLP}/profesor/${idD}`, 'DELETE')

    }
};

export default resolvers;