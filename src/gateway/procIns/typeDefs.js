export const horarioTypeDef = `
    type MessageResponseHorario {
      status: Int
      message: String
      data: [String]
    }
`;

export const horarioQueries = `
    horarioByID(id: String!): MessageResponseHorario!
    
`;

export const horarioMutations = `
`;
