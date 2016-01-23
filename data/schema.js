import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

export var Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        args: {
          name: {
            description: 'name of the person to say hello to',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, {name}) => (name ? name : 'world'),
      }
    }
  })
});