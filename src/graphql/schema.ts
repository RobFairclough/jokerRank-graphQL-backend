import { prisma } from '../generated/prisma-client';
import datamodelInfo from '../generated/nexus-prisma';
import * as path from 'path';
import { makePrismaSchema } from 'nexus-prisma';
import { Mutation } from './mutation';
import { Query, User } from './query';

export const schema = makePrismaSchema({
  types: [Query, Mutation, User],

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, '../generated/schema.graphql'),
    typegen: path.join(__dirname, '../generated/nexus.ts'),
  },
});
