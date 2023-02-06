"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./dbconnection");
const recipes_1 = __importDefault(require("./routes/recipes"));
const apollo_server_express_1 = require("apollo-server-express");
const recipies_resolver_1 = require("./graphql_resolvers/recipies_resolver");
const recipies_1 = require("./graphqlschema/recipies");
const app = (0, express_1.default)();
const resolvers = [recipies_resolver_1.recipies_resolver];
const typeDefs = [recipies_1.recipiesTypeDef];
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/recipies', recipes_1.default);
app.use(express_1.default.static(__dirname + '/public'));
app.use(express_1.default.static('uploads'));
server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () => console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`));
});
//# sourceMappingURL=index.js.map