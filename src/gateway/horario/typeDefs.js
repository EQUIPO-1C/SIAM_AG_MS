export const horarioTypeDef = `
    type MessageResponseHorario {
      status: Int
      message: String
      data: [horario]
    }
    type MessageResponseHorarioID {
      status: Int
      message: String
      data: mydata
    }
    
    type mydata {
      data: [horario]
    }
    type horario{
      inicio: String   
      fin: String        
      lunes: [Subject]  
      martes: [Subject]   
      miercoles: [Subject]
      jueves: [Subject]   
      viernes: [Subject]  
      sabado: [Subject]    
      domingo: [Subject]  
      idestudiante: String   
  }
  
    type Subject {
      codmateria: String
      materia: String 
      plan: String 
      horas: String 
      grupo: Int 
      salon: String 
  } 

`;

export const horarioQueries = `
    horarioByID(id: String!): MessageResponseHorarioID!
    horarioAll: MessageResponseHorario! 
`;

export const horarioMutations = `
`;
