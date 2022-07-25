const {gql} = require('apollo-server-express');

//createss a gql schema
module.exports = gql`
#custom scalar for timestamps#
scalar DateTime

type User{
    id: ID!
    username: String!
    email: String!
    avatar: String
}



type Query {
    user(username: String!): User
    users: [User!]!
    me: User!
}

type Mutation {
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
}
`;
