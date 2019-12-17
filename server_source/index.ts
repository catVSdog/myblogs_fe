import { ApolloServer, gql } from "apollo-server-koa"
import app from "./app"

// noly used to init server in dev env
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;


const server = new ApolloServer({ typeDefs })
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`))