import { prisma } from '../generated/prisma-client'
import { ApolloServer } from 'apollo-server';
import { schema } from '../graphql/schema'
import { getUser } from '../utils/auth';

const server = new ApolloServer({
  schema, context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = getUser(token);
    return { prisma }
  }
});



server.listen().then(info => {
  console.log('running on ', info.port);
});
