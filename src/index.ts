import express from 'express';
import './dbconnection'
import router from './routes/recipes';
import { ApolloServer, gql } from 'apollo-server-express'
import { recipies_resolver } from './graphql_resolvers/recipies_resolver';
import { recipiesTypeDef } from './graphqlschema/recipies';
const app = express();
const resolvers = [recipies_resolver]
const typeDefs = [recipiesTypeDef]


const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/recipies', router);

server.start().then(res => {
  server.applyMiddleware({ app });

  app.listen({ port: 3000 }, () =>
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
  );
})

