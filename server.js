import express from 'express';
import graphQLHTTP from 'express-graphql';
// import path from 'path';
// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
import {Schema} from './data/schema';

const GRAPHQL_PORT = 8080;

// Expose a GraphQL endpoint
var graphQLServer = express();
graphQLServer.use('/', graphQLHTTP({
  graphiql: true,
  pretty: true,
  schema: Schema,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));