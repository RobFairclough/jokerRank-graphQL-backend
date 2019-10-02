import { prisma } from '../generated/prisma-client';
import { ApolloServer } from 'apollo-server';
import { schema } from '../graphql/schema';
import { getUser, readJWT } from '../utils/auth';

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const auth = readJWT(token);
    return { prisma, auth };
  },
});

server.listen().then((info) => {
  console.log('running on ', info.port);
});
