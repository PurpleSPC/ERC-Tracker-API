const {ApolloServer} = require('apollo-server');
require('dotenv').config();


//local module imports
const models = require('./models');
const db = require('./db');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

//run on specified port OR 4000
const port = process.env.PORT || 4000;
//store DB_HOST value as a variable
const DB_HOST = process.env.DB_HOST;


//connect to db
db.connect(DB_HOST);

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: ({req}) => {
        //add the db models to context
        return {models};
    }
});


//set up app to listen on PORT 
server.listen(port, () => 
    console.log(`GraphQL server running at http://localhost:${port}${server.graphqlPath}`)
);

