import { gql } from 'apollo-server-koa';

const typeDefines = gql`
    type Query {
        tag: String
    }
`;
export default typeDefines;
