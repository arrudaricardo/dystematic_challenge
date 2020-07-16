import { gql } from "apollo-server";

const typeDefs = gql`
  type Security {
    ticker: String
    securityName: String
    sector: String
    country: String
    trend: Float
  }
  type Query {
    Securities: [Security]
  }
`;


export default typeDefs;
