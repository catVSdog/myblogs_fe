import tagResolver from './graphql_resolvers/tags';
import tagDefine from './graphql_type_defs/tags';

const schs = [tagDefine];
const res = [tagResolver];

export { schs, res };
