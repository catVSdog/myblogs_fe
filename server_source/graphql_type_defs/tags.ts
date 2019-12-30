import { gql } from 'apollo-server-koa';

const typeDefs = gql`
    type Query {
        tags: [Tag]
    }
    type Tag {
        id: Int
        name: String
        shortName: String
    }
`;
export default typeDefs;
