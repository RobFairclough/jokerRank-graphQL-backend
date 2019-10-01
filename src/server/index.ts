import { prisma } from '../generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'
import { schema } from '../graphql/schema'

const server = new GraphQLServer({
  schema,
  context: { prisma },
})
server.start(() => {
  console.log('Server is running on http://localhost:4000');
})
