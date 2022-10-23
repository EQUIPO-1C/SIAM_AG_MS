import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointI_P, portI_P, urlI_P} from './server.js';

 
//url asignaturas asignatura_ms
const URLA_IP = `http://${urlI_P}:${portI_P}/${entryPointI_P}`;

const resolvers = {
    
    Query: {
        //
        allprofesorcalifacionesin: (_) => generalRequest(`${URLA_IP}/profesor`, 'GET'),
        profesorcalifacionesinById:(_, { id ,}) => generalRequest(`${URLA_IP}/profesor/${id}`, 'GET'),
    },

    Mutation: {
        //createSiamAsignatura: (_, {inputAsignaturainscritas}) =>generalRequest(`${URLA}/asignatura`, 'POST',inputAsignaturainscritas),
       // updateSiamAsignaturaByID: (_, { idU, inputAsignaturainscritasU }) =>generalRequest(`${URLA}/asignatura/${idU}`, 'PUT', inputAsignaturainscritasU),
        //deleteSiamAsignaturaByID: (_, { idD }) =>generalRequest(`${URLA}/asignatura/${idD}`, 'DELETE')
    }
};

export default resolvers;
