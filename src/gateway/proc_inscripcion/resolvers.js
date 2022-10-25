import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointPI, portPI, urlPI } from './server.js';

 
//url asignaturas historial
const URL_PIns = `http://${urlPI}:${portPI}/${entryPointPI}`;

const resolvers = {
    
    Query: {
        //Queries para historial de cintaciones
        allHistorialCitaciones: (_) => generalRequest(`${URL_PIns}/hists`, 'GET')
        /*
        asignaturaById:(_, { id ,}) => generalRequest(`${URLA}/asignatura/${id}`, 'GET'),
        pruebaAsignaturaServicios: (_) => generalRequest(`${URLA}/healthcheck`, 'GET'),
        */
    },

    Mutation: {/*
        createSiamAsignatura: (_, {inputAsignatura}) =>generalRequest(`${URLA}/asignatura`, 'POST',inputAsignatura),
        updateSiamAsignaturaByID: (_, { idU, inputAsignaturaU }) =>generalRequest(`${URLA}/asignatura/${idU}`, 'PUT', inputAsignaturaU),
        deleteSiamAsignaturaByID: (_, { idD }) =>generalRequest(`${URLA}/asignatura/${idD}`, 'DELETE')
        */
    }
};

export default resolvers;
