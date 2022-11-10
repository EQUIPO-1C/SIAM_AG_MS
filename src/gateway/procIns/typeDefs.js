export const procInsTypeDef = `
    type MessageResponseProcIns {
      message: String
      process: [procInsObj]
    }
    type MessageResponseProcInsID{
      message: String
      procs: procInsObj
    }

    type procInsObj {
      idStudent:String
      fechaIns: String
      materias:[String]
      credTotales:Int
    }

    input procInsInput{
      idStudent:String
      fechaIns: String
      materias:[String]
      credTotales:Int
    }

`;

export const procInsQueries = `
    procInsByID(id: String!): MessageResponseProcInsID!
    procInsAll: MessageResponseProcIns!
`;

export const procInsMutations = `
    

    
`;
//updateProcIns(id:  String!, inputHorario: horarioInput): MessageResponseHorario
//deleteProcIns(id:  String!):responseDelete
// createProcIns(inputProcs: procInsInput): MessageResponseProcInsID