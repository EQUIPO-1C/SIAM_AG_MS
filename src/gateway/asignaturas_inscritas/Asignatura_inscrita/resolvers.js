import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointA, portA, urlA } from './server.js';

 
//url asignaturas asignatura_ms
const URLA = `http://${urlA}:${portA}/${entryPointA}`;

const resolvers = {
    
    Query: {
        //
        allAsignaturas: (_) => generalRequest(`${URLA}/Asignatura`, 'GET'),
        asignaturaById:(_, { id ,}) => generalRequest(`${URLA}/Asignatura/${id}`, 'GET'),
        pruebaAsignaturaServicios: (_) => generalRequest(`${URLA}/healthcheck`, 'GET'),
    },

    Mutation: {
        createSiamAsignatura: (_, {inputAsignaturainscritas}) =>generalRequest(`${URLA}/asignatura`, 'POST',inputAsignaturainscritas),
        updateSiamAsignaturaByID: (_, { idU, inputAsignaturainscritasU }) =>generalRequest(`${URLA}/asignatura/${idU}`, 'PUT', inputAsignaturainscritasU),
        deleteSiamAsignaturaByID: (_, { idD }) =>generalRequest(`${URLA}/asignatura/${idD}`, 'DELETE')
    }
};

export default resolvers;
