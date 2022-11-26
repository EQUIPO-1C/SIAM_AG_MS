import { generalRequest, getRequest } from '../../../utilities.js';
import { entryPointI_Ca, portI_Ca, urlI_Ca} from '../../Consumo/calificaciones/server.js';
import calificacionesResquest from '../../Consumo/calificaciones/request';
import asignaturas_inscritasResquest from '../../Consumo/asignaturas_inscritas/request';

//url asignaturas asignatura_ms
const URLA_ICa = `http://${urlI_Ca}:${portI_Ca}/${entryPointI_Ca}`;

const resolvers = {
    
    Query: {
        //
        allcalifacionesin: (_) => {return calificacionesResquest.allCalificacionesRequest(_)} ,
        califacionesinById:(_, { id ,}) => generalRequest(`${URLA_ICa}/calificacion/${id}`, 'GET'),
        calificacionesinByIDEst: async (_, { iD }) => {
            let calif = await calificacionesResquest.allCalificacionesRequest(_);
            let MisCalificaciones = [];
            for( let AsignaturaNota of calif){
                
                    if (AsignaturaNota.iD_Estudiante !== iD){
                       
                        calif = calif.filter((item) => item !== AsignaturaNota); 
                    }; 
            };      

            for (let a of calif){
                    let codigo = a.codigo_Asignatura;
                    let asignatura = await asignaturas_inscritasResquest.asignaturainscritasById(_,{id:codigo});
                    
                    const AsignaturaCalif = 
                        {
                            iD_Calificacion : a.iD_Calificacion,
                            definitiva_Calificacion : a.definitiva_Calificacion,
                            calificaciones_Calificacion : a.calificaciones_Calificacion,
                            porcentajes_Calificaciones : a.porcentajes_Calificaciones,
                            iD_Estudiante : a.iD_Estudiante,
                            codigo_Asignatura : a.codigo_Asignatura,
                            nombre_Asignatura: asignatura.nombre_Asignatura,
                            numero_Grupo_Asignatura: asignatura.numero_Grupo_Asignatura,
                            creditos_Asignatura: asignatura.creditos_Asignatura,
                            horas_Asignatura: asignatura.horas_Asignatura,
                            facultad_Asignatura: asignatura.facultad_Asignatura,
                            ubicacion_Asignatura: asignatura.ubicacion_Asignatura

                        };
                        MisCalificaciones.push(AsignaturaCalif);
                    
                    };
                    
                
                 
                                       
            
            return MisCalificaciones;
        }
        
    },

    Mutation: {
        createSiamcalificacion: (_, {CalificacioninInput}) =>generalRequest(`${URLA}/calificacion`, 'POST',CalificacioninInput),
        updateSiamcalificacionByID: (_, { idU, CalificacioninInput }) =>generalRequest(`${URLA}/calificacion/${idU}`, 'PUT', CalificacioninInput),
        //deleteSiamAsignaturaByID: (_, { idD }) =>generalRequest(`${URLA}/asignatura/${idD}`, 'DELETE')
    }
};


export default resolvers;
