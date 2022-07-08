import express from 'express';
import { AddressInfo } from 'net';
import { createServer } from 'http';

import { server as ApolloServer } from '@/server';

// import { getUser } from './middlewares/authHandler';

(async () => {
  const server = await ApolloServer();

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
