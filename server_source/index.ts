/* eslint-disable max-params */
import { ApolloServer } from 'apollo-server-koa';
import { app } from './app';
import { schs, res } from './schema';

const server = new ApolloServer({ typeDefs: schs, resolvers: res });
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
