import { Prisma, UserType } from '../generated/prisma-client';

export interface AuthToken {
  id: string;
  type: UserType;
}

export interface Context {
  prisma: Prisma;
  auth: AuthToken;
}
