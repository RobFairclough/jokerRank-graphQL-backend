import { prismaObjectType } from "nexus-prisma";
import { stringArg, idArg } from 'nexus'

// @ts-ignore
export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['joke']);
    t.list.field('feed', {
      type: 'Joke',
      resolve: (_, args, ctx) =>
        ctx.prisma.jokes({ where: { published: true } }),
    });
    t.list.field('jokesByUser', {
      type: 'Post',
      args: { email: stringArg() },
      resolve: (_, { email }, ctx) =>
        ctx.prisma.jokes({ where: { author: { email } } }),
    });
    t.list.field('commentsByUser', {
      type: 'Comment',
      args: { email: stringArg() },
      resolve: (_, { email }, ctx) => ctx.prisma.comments({ where: { author: { email } } })
    })
  },
});
