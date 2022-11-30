import { generalRequest} from '../../../utilities.js';
import { entryPointI_Ca, portI_Ca, urlI_Ca} from './server.js';



//url asignaturas asignatura_ms
const URLA_ICa = `http://${urlI_Ca}:${portI_Ca}/${entryPointI_Ca}`;

const request = {
    allCalificacionesRequest:(_)=> generalRequest(`${URLA_ICa}/calificacion`, 'GET')
    
};


export default request;
