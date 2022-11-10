export const horarioTypeDef = `
    type MessageResponseHorario {
      status: Int
      message: String
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

  input horarioInput{
    inicio: String   
    fin: String        
    lunes: [SubjectInput]  
    martes: [SubjectInput]   
    miercoles: [SubjectInput]
    jueves: [SubjectInput]   
    viernes: [SubjectInput]  
    sabado: [SubjectInput]    
    domingo: [SubjectInput]  
    idestudiante: String   
}

input SubjectInput {
  codmateria: String
  materia: String 
  plan: String 
  horas: String 
  grupo: Int 
  salon: String 
} 

type responseCreate{
  status: Int
  message: String
  data: [inser]
}
type inser{
  InsertedID: String
}
type responseDelete{
  status: Int
  message: String
  data: [String]
}

`;

export const horarioQueries = `
    horarioByID(id: String!): MessageResponseHorario!
    horarioAll: MessageResponseHorario 
`;

export const horarioMutations = `
    updateHorario(id:  String!, inputHorario: horarioInput): MessageResponseHorario
    createHorario(inputHorario: horarioInput): responseCreate
    deleteHorario(id:  String!):responseDelete
`;
