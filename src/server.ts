import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer, BaseContext, ContextFunction } from '@apollo/server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

import resolvers from '@/resolvers';
import driver from '@/config/neo4j';
import typeDefs from '@/config/typeDefs';
import ogm from '@/config/ogm';
import { ExpressContextFunctionArgument } from '@apollo/server/dist/esm/express4';

// GRAPHQL Server
const neo4jGraphQL = new Neo4jGraphQL({ typeDefs, driver, resolvers });

export const server = async () => {
  const schema = await neo4jGraphQL.getSchema();
  await ogm.init();

  return new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
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

export const context: ContextFunction<[ExpressContextFunctionArgument], BaseContext> = async ({ req }) => ({
  req,
  driver,
  ogm,
  neo4jDatabase: process.env.NEO4J_DATABASE || 'neo4j',
  cypherParams: {
    currentUserId: req?.user?.sub,
  },
});
