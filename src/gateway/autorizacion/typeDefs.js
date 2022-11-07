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
  type AttendantInfo {
    id: Int
    name: String
    surname: String
    identificationType: String
    identificationNumber: Int
  }
  type UserAttendantInfo {
    name: String
    surname: String
    identificationType: String
    identificationNumber: Int
  }
  type AllUserInfo {
    name: String
    surname: String
    role: String
    identificationType: String
    identificationNumber: Int
    birthDate: String
    nationality: String
    address: String
    city: String
    level: Int
    bloodType: String
    ethnicity: String
    militarySituation: String
    attendants: [UserAttendantInfo]
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
    getAllUserInfo(username: String): AllUserInfo
    getAllUserInfoByDoc(identificationNumber: Int): AllUserInfo
  `;

export const authMutations = `
    createSiamUser(siamUser: SiamUserInput): MessageResponse
    loginSiamUser(siamLogin: SiamLoginInput): TokenResponse
`;