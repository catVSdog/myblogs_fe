import { ApolloServer } from 'apollo-server-koa';
import { app } from './app';

// noly used to init server in dev env
import typeDefines from './graphql_type_defs/tags';
import res from './graphql_resolvers/tags';

const server = new ApolloServer({ typeDefs: [typeDefines], resolvers: [res] });
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
