const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { typeDefs } = require('./schema');
const { Query, Category, Product } = require('./resolvers');
const { categories, products, reviews } = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
    reviews,
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // this is the most important thing
});

server.listen().then(({ url }) => {
  console.log('server is ready at: ', url);
});
