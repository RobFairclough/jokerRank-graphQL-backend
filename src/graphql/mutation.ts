import { prismaObjectType } from "nexus-prisma"
import { stringArg, idArg } from 'nexus'
import { User, UserCreateInput } from "../generated/prisma-client"
import { Context } from "prisma-client-lib/dist/types"
import { UserWhereInput } from "../generated/nexus-prisma/nexus-prisma"
import * as bcrypt from 'bcrypt';

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
    });
    t.field('register', {
      type: 'User',
      args: { email: stringArg(), password: stringArg(), name: stringArg() },
      resolve: (_, { email, password, name }, ctx) => {
        // todo error handling? status codes?
        if (!email || !password || !name) return null;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const userToSave: UserCreateInput = {
          email, password: hashedPassword, name
        }
        // todo check that email etc. is unique
        const newUser = ctx.prisma.createUser(userToSave);
        // todo figure out implementation to hide this
        // different type for output user, not connected to db?
        // store passwords seperately?
        newUser.password = 'nope';
        return newUser;
      }
    })
    t.field('login', {
      type: 'String',
      nullable: true,
      args: { email: stringArg(), password: stringArg() },
      resolve: async (_, { email, password }, ctx) => {
        const user: User = await ctx.prisma.user({ where: { email } });
        // verify user exists
        // encrypt input password and check against stored password
        const isValidated = !!user && bcrypt.compareSync(password, user.password);
        if (isValidated) {
          // generate and return token

        }
        return null;
      }
    })
  },
})