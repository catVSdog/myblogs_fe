/* eslint-disable max-params */
import axios from 'axios';

const resolvers = {
    Tag: {
        id(parent) {
            return parent.t_id;
        },
        /* 因为typedefine中需要的字段名(name)，恰好在 parent 中，且我们也打算使用该字段名，所以该解析函数可以省略   
        同样，如果 typedefine中的字段全部都在parent中，那么我们甚至可以不用写这个解析类，直接使用即可   */
        name(parent) {
            return parent.name;
        },
        /* 此字段不属于原生字段，属于我们根据返回值聚合出来的。同样，并非所有在 parent 中的字段。都要在typedefine中定义
        并在前端使用，我们当然可以将 parent 中的某些字段舍弃，或者是用作它用  */
        shortName(parent) {
            switch (parent.name) {
                case 'python':
                    return 'py';
                case 'typescript':
                    return 'ts';
                case 'mysql':
                    return 'mysql';
                case 'graphql':
                    return 'gql';
                default:
                    return 'unkonw';
            }
        }
    },
    Query: {
        async tags(parent, args, context, info) {
            try {
                const result = await axios.get('http://localhost:8000/tags');
                return result.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};

export default resolvers;
