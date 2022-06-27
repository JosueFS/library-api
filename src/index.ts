import neo4j from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { createServer } from 'http';
import express from 'express';
import { AddressInfo } from 'net';

import dotenv from 'dotenv';
// import { typeDefs } from './types';
import { mergeTypeDefs } from '@/utils/typeDefsGenerator';
// import { getUser } from './middlewares/authHandler';

dotenv.config();

const NEO4J_URI = process.env.NEO4J_URI || '';
const NEO4J_USER = process.env.NEO4J_USER || '';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || '';

// this request is to return the token
// let books = [];

// GRAPHQL Server
const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
);

const typeDefs = mergeTypeDefs();

const neo4jGraphQL = new Neo4jGraphQL({ typeDefs, driver });

(async () => {
  const schema = await neo4jGraphQL.getSchema();

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        endpoint: '/graphql',
      }),
    ],
    context: () => ({ driver }),
    // context: async ({ req }) => {
    //   // get the user token from the headers
    //   const token = req.headers.authorization || '';

    //   // try to retrieve a user with the token
    //   await getUser(token);

    //   // optionally block the user
    //   // we could also check user roles/permissions here
    //   // if (!user) throw new AuthenticationError('you must be logged in');

    //   // add the user to the context
    //   return { driver };
    // },
  });

  // Express Server
  const app = express();

  app.use(express.json());

  const httpServer = createServer(app);

  await server.start();

  server.applyMiddleware({ app });

  httpServer.listen({ port: 4001 });

  const { port } = httpServer.address() as AddressInfo;

  console.log(
    `⚛ GraphQL server online http://localhost:${port}${server.graphqlPath}`
  );
})();

//NExt steps
// add code-gen
//https://www.the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen
//https://www.graphql-code-generator.com/docs/guides/graphql-server-apollo-yoga
