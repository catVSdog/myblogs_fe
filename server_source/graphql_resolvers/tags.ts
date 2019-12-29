/* eslint-disable max-params */
const axios = require('axios');

const resolvers = {
    Query: {
        async tags(parent, args, context, z) {
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
