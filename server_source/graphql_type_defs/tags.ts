import { gql } from 'apollo-server-koa';

const typeDefs = gql`
    type Query {
        tags: [Tag]
    }
    type Tag {
        t_id: Int
        name: String
    }
`;
export default typeDefs;
