import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointI_Ca, portI_Ca, urlI_Ca} from './server.js';

 
//url asignaturas asignatura_ms
const URLA_ICa = `http://${urlI_Ca}:${portI_Ca}/${entryPointI_Ca}`;

const resolvers = {
    
    Query: {
        //
        allcalifacionesin: (_) => generalRequest(`${URLA_ICa}/calificacion`, 'GET'),
        califacionesinById:(_, { id ,}) => generalRequest(`${URLA_ICa}/calificacion/${id}`, 'GET'),
    },

    Mutation: {
        createSiamcalificacion: (_, {CalificacioninInput}) =>generalRequest(`${URLA}/calificacion`, 'POST',CalificacioninInput),
        updateSiamcalificacionByID: (_, { idU, CalificacioninInput }) =>generalRequest(`${URLA}/calificacion/${idU}`, 'PUT', CalificacioninInput),
        //deleteSiamAsignaturaByID: (_, { idD }) =>generalRequest(`${URLA}/asignatura/${idD}`, 'DELETE')
    }
};

export default resolvers;
