const {gql} = require('apollo-server-express');

//createss a gql schema
module.exports = gql`
type Case {
    id: ID!
    #change this to a date
    dos: String!
    Hospital: String!
    Surgeon: String!

}
 type Erc {
    id:ID!
    serial: String!
    #Change to enum?
    model: String!
    isAssigned: Boolean
 }

type Query{
    cases: [Case!]!
}

type Mutation {
    newCase(dos: String!, hospital:String!, surgeon:String!, ): Case!
    newErc(serial:String!, model: String!): Erc!
}
`;
