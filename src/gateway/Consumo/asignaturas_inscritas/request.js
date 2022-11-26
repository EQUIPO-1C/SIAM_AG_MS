import { generalRequest} from '../../../utilities.js';
import { entryPointA_i, portA_i, urlA_i } from './server.js';

 
//url asignaturas asignatura_ms
const URLA_i = `http://${urlA_i}:${portA_i}/${entryPointA_i}`;

const request = {
    
        asignaturainscritasById:(_, { id ,}) => generalRequest(`${URLA_i}/asignatura/${id}`, 'GET'),


};

export default request;
