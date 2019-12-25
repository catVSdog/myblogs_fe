import { gql } from 'apollo-server-koa';

const typeDefines = gql`
    type Query {
        hello: String
    }
`;
export default typeDefines;
