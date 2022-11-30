import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointA_i, portA_i, urlA_i } from './server.js';
import asignaturas_inscritasResquest from '../../Consumo/asignaturas_inscritas/request';

 
//url asignaturas asignatura_ms
const URLA_i = `http://${urlA_i}:${portA_i}/${entryPointA_i}`;

const resolvers = {
    
    Query: {
        //
        allAsignaturasinscritas: (_) => generalRequest(`${URLA_i}/asignatura`, 'GET'),
        asignaturainscritasById:(_, { id }) => {return asignaturas_inscritasResquest.asignaturainscritasById(_, { id }) },
    },

    Mutation: {
        //createSiamAsignatura: (_, {inputAsignaturainscritas}) =>generalRequest(`${URLA}/asignatura`, 'POST',inputAsignaturainscritas),
       // updateSiamAsignaturaByID: (_, { idU, inputAsignaturainscritasU }) =>generalRequest(`${URLA}/asignatura/${idU}`, 'PUT', inputAsignaturainscritasU),
        //deleteSiamAsignaturaByID: (_, { idD }) =>generalRequest(`${URLA}/asignatura/${idD}`, 'DELETE')
    }
};

export default resolvers;
