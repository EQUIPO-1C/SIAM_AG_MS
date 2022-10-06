export const authTypeDef = `
  type MessageResponse {
    message: String
  }
  type TokenResponse {
    token: String
  }
  type SiamUser{
    id: ID!
    name: String
    surname: String
    username: String
    password: String
    birthDate: String
    role: String
    nationality: String
    address: String
    city: String
    level: Int
    bloodType: String
    ethnicity: String
    militarySituation: String
    identificationType: String
    identificationNumber: Int
  }
  input SiamLoginInput {
    username: String!
    password: String!
  }
  input SiamUserInput{
    name: String!
    surname: String!
    username: String!
    password: String!
    birthDate: String!
    role: String!
    nationality: String!
    address: String!
    city: String!
    level: Int!
    bloodType: String!
    ethnicity: String!
    militarySituation: String!
    identificationType: String!
    identificationNumber: Int!
  }
  `;

export const authQueries = `
  `;

export const authMutations = `
    createSiamUser(siamUser: SiamUserInput): MessageResponse
    loginSiamUser(siamLogin: SiamLoginInput): TokenResponse
    verifyToken(jwt: String!): String
`;