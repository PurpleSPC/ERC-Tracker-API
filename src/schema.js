const {gql} = require('apollo-server');

//createss a gql schema
module.exports = gql`
type Case {
    id: ID!
    dos: String!
    Hospital: String!
}

type Query{
    cases: [Case!]!
}

type Mutation {
    newCase(dos: String!, hospital:String!): Case!
}
`;
