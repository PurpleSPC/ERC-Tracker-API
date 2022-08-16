const {ApolloServer} = require('apollo-server-express');
require('dotenv').config();
const express = require('express');

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


async function listen(port) {
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
        context: () => {
            return {models};
        }
    });
    await server.start();
  
    const app = express();
    server.applyMiddleware({ app });
  
    return new Promise((resolve, reject) => {
      // The `listen` method launches a web server.
      app.listen(port).once('listening', resolve).once('error', reject);
    });
  }
  
  async function main() {
    try {
      await listen(4000);
      console.log(`🚀 Server is ready at http://localhost:4000/graphql`)
    } catch (err) {
      console.error('Error starting the node server', err);
    }
  }
  
  void main();

