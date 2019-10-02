import { Prisma } from "../generated/prisma-client";

export interface AuthToken {
  id: string;
}

export interface Context {
  prisma: Prisma;
  auth: AuthToken;
}