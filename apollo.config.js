module.exports = {
    client: {
        service: {
            name: 'my-app',
            // URL to the GraphQL API
            url: 'http://localhost:4000/graphql'
        },
        // Files processed by the extension
        includes: ['client_source/**/*.vue', 'client_source/**/*.ts']
    }
};
