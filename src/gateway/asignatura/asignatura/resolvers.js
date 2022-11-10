import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointA, portA, urlA } from './server.js';
import { entryPointP, portP, urlP } from '../profesores/server.js';
const URLP = `http://${urlP}:${portP}/${entryPointP}`;
 
//url asignaturas asignatura_ms
const URLA = `http://${urlA}:${portA}/${entryPointA}`;

const resolvers = {
    
    Query: {
        //Queries para historia academica
        allAsignaturas: (_)=> 
            generalRequest(`${URLA}asignaturas`, 'GET').then(async function(data){
                await data.forEach(element=>{
                    element.profesor = generalRequest(`${URLP}profesor/${element.idProfesor}`, 'GET').then(async function(data){
                        return data
                    })
                })
                return data
        }),
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
