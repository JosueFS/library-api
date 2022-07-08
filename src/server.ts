import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import resolvers from '@/resolvers';
import driver from '@/config/neo4j';
import typeDefs from '@/config/typeDefs';
import ogm from './config/ogm';

// GRAPHQL Server
const neo4jGraphQL = new Neo4jGraphQL({ typeDefs, driver, resolvers });

export const server = async () => {
  const schema = await neo4jGraphQL.getSchema();
  await ogm.init();

  return new ApolloServer({
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
};
