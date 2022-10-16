export const authTypeDef = `
  type MessageResponse {
    message: String
    id: Int
    username: String
    role: String
  }
  type TokenResponse {
    token: String
    role: String
  }
  type UserInfo {
    id: Int
    username: String
    name: String
    surname: String
    identificationType: String
    identificationNumber: Int
    role: String
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
    verifyToken(jwt: String): MessageResponse
    getUserInfo(username: String): UserInfo
  `;

export const authMutations = `
    createSiamUser(siamUser: SiamUserInput): MessageResponse
    loginSiamUser(siamLogin: SiamLoginInput): TokenResponse
`;