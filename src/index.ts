import express from 'express';
import { createServer } from 'node:http';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';

import { server as ApolloServer, context } from '@/server';

// import { getUser } from './middlewares/authHandler';
const PATH = '/graphql';
const PORT = 4001;

(async () => {
  const server = await ApolloServer();

  // Express Server
  const app = express();

  app.use(express.json());

  const httpServer = createServer(app);

  await server.start();

  app.use(PATH, apolloMiddleware(server, { context: context }));

  httpServer.listen(PORT).on('listening', () => {
    console.log(`⚛ GraphQL server online http://localhost:${PORT}${PATH}`);
  });
})();

//NExt steps
// add code-gen
//https://www.the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen
//https://www.graphql-code-generator.com/docs/guides/graphql-server-apollo-yoga
