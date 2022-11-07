import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointA, portA, urlA } from './server.js';

 
//url asignaturas asignatura_ms
const URLA = `http://${urlA}:${portA}/${entryPointA}`;

const resolvers = {
    
    Query: {
        //Queries para historia academica
        allAsignaturas: (_) => generalRequest(`${URLA}asignaturas`, 'GET'),
        asignaturaById:(_, { id ,}) => generalRequest(`${URLA}asignatura/${id}`, 'GET'),
        pruebaAsignaturaServicios: (_) => generalRequest(`${URLA}healthcheck`, 'GET'),
    },

    Mutation: {
        createSiamAsignatura: (_, {inputAsignatura}) =>generalRequest(`${URLA}/asignatura`, 'POST',inputAsignatura),
        updateSiamAsignaturaByID: (_, { idU, inputAsignaturaU }) =>generalRequest(`${URLA}/asignatura/${idU}`, 'PUT', inputAsignaturaU),
        deleteSiamAsignaturaByID: (_, { idD }) =>generalRequest(`${URLA}/asignatura/${idD}`, 'DELETE')
    }
};

export default resolvers;
