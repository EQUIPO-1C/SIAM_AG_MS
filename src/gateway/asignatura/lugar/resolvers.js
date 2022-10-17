import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointL, portL, urlL } from './server.js';
//url lugares asignatura_ms

const URLL = `http://${urlL}:${portL}/${entryPointL}`;

const resolvers = {
    Query: {
        //Queries lugares
        allLugares: (_) => generalRequest(`${URLL}/lugar`, 'GET'),
        lugaresByID:(_, { id ,}) => generalRequest(`${URLL}/lugar/${id}`, 'GET'),
        pruebaLugaresServicios: (_) => generalRequest(`${URLL}/healthcheckLugar`, 'GET')

    },

    Mutation: {
        createSiamLugar: (_, {inputLugar}) =>generalRequest(`${URLL}/lugar`, 'POST',inputLugar),
        updateSiamLugaresByID: (_, { idU, inputLugarU }) =>generalRequest(`${URLL}/lugar/${idU}`, 'PUT', inputLugarU),
        deleteSiamLugarByID: (_, { idD }) =>generalRequest(`${URLL}/lugar/${idD}`, 'DELETE')

    }
};

export default resolvers;
