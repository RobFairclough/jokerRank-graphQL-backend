import { prismaObjectType } from 'nexus-prisma';
import { stringArg, idArg } from 'nexus';
import * as bcrypt from 'bcrypt';
import { UserCreateInput, Joke } from '../generated/prisma-client';
import { createJWT } from '../utils/auth';
import { Context } from '../types/Server';

// @ts-ignore
const required = true;
export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['deleteJoke']);
    t.field('createDraft', {
      type: 'Joke',
      args: {
        title: stringArg(),
        authorId: idArg({ nullable: true }),
      },
      resolve: (_, { title, authorId }, ctx) => ctx.prisma.createJoke({
        title,
        author: { connect: { id: authorId } },
      }),
    });

    t.field('register', {
      type: 'User',
      args: {
        email: stringArg({ required }),
        password: stringArg({ required }),
        name: stringArg({ required }),
      },
      resolve: (_, { email, password, name }, ctx) => {
        // todo error handling? status codes?
        if (!email || !password || !name) return null;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const userToSave: UserCreateInput = {
          email,
          password: hashedPassword,
          name,
        };
        const newUser = ctx.prisma.createUser(userToSave);
        return newUser;
      },
    });
    t.field('login', {
      type: 'String',
      nullable: true,
      args: { email: stringArg(), password: stringArg() },
      resolve: async (_, { email, password }, ctx: Context) => {
        const user = await ctx.prisma.user({ email });
        if (!user) return null;
        const isValidated = bcrypt.compareSync(password, user.password);
        if (isValidated) {
          const token = createJWT(user);
          return token;
        }
        return null;
      },
    });
    t.field('addJoke', {
      type: 'Joke',
      nullable: true,
      args: { content: stringArg({ required }) },
      resolve: async (_, { content }, ctx: Context): Promise<Joke | null> => {
        const { auth } = ctx;
        if (!auth?.id) return null;
        const joke = await ctx.prisma.createJoke({
          content,
          author: { connect: { id: auth.id } },
        });
        return joke;
      },
    });

    t.field('addComment', {
      type: 'Comment',
      nullable: true,
      args: { content: stringArg({ required }), jokeID: stringArg({ required }) },
      resolve: async (_, { content, jokeID }, ctx: Context) => {
        const { auth } = ctx;
        if (!auth?.id) return null;
        const comment = await ctx.prisma
          .createComment({ content, author: { connect: { id: auth.id } }, joke: { connect: { id: jokeID } } });
        return comment;
      }
    });

    t.field('deleteComment', {
      type: 'Comment',
      nullable: true,
      args: { commentID: stringArg({ required }) },
      resolve: async (_, { commentID }, ctx: Context) => {
        const { auth } = ctx;
        if (!auth?.id) return null;
        const author = await ctx.prisma.comment({ id: commentID }) ?.author();
        if (author?.id === auth.id || auth.type === 'ADMIN') {
          const comment = await ctx.prisma.deleteComment({ id: commentID });
          return comment;
        }
        return null;
      }
    });
    // naming this deleteJoke gives a lint error that I should look into
    t.field('deleteOneJoke', {
      type: 'Joke',
      nullable: true,
      args: { jokeID: stringArg({ required }) },
      resolve: async (_, { jokeID }, ctx: Context) => {
        const { auth } = ctx;
        if (!auth?.id) return null;
        const canDelete = ctx.auth.type === 'ADMIN' ||
          await ctx.prisma.joke({ id: jokeID }).author().id() === ctx.auth.id;
        if (canDelete) return await ctx.prisma.deleteJoke({ id: jokeID });
        return null;
      }
    })
  },
});
