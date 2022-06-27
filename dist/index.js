"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const graphql_1 = require("@neo4j/graphql");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { typeDefs } from './types';
const typeDefsGenerator_1 = require("@/utils/typeDefsGenerator");
// import { getUser } from './middlewares/authHandler';
dotenv_1.default.config();
const NEO4J_URI = process.env.NEO4J_URI || '';
const NEO4J_USER = process.env.NEO4J_USER || '';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || '';
// this request is to return the token
// let books = [];
// GRAPHQL Server
const driver = neo4j_driver_1.default.driver(NEO4J_URI, neo4j_driver_1.default.auth.basic(NEO4J_USER, NEO4J_PASSWORD));
const typeDefs = (0, typeDefsGenerator_1.mergeTypeDefs)();
const neo4jGraphQL = new graphql_1.Neo4jGraphQL({ typeDefs, driver });
(async () => {
    const schema = await neo4jGraphQL.getSchema();
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        introspection: true,
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)({
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
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    const httpServer = (0, http_1.createServer)(app);
    await server.start();
    server.applyMiddleware({ app });
    httpServer.listen({ port: 4001 });
    const { port } = httpServer.address();
    console.log(`⚛ GraphQL server online http://localhost:${port}${server.graphqlPath}`);
})();
