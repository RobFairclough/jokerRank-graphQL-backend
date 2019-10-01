import { prismaObjectType } from "nexus-prisma"
import { stringArg, idArg } from 'nexus'


// @ts-ignore
export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['createUser', 'deleteJoke'])
    t.field('createDraft', {
      type: 'Joke',
      args: {
        title: stringArg(),
        authorId: idArg({ nullable: true }),
      },
      resolve: (_, { title, authorId }, ctx) =>
        ctx.prisma.createJoke({
          title,
          author: { connect: { id: authorId } },
        }),
    })
    t.field('publish', {
      type: 'Joke',
      nullable: true,
      args: { id: idArg() },
      resolve: (_, { id }, ctx) =>
        ctx.prisma.updateJoke({
          where: { id },
          data: { published: true },
        }),
    })
  },
})