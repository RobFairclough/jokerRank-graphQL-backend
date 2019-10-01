import * as jwt from 'jsonwebtoken';
import { User } from '../generated/prisma-client';

export const createJWT = (user: User) => {
  const { id } = user
  // todo movetoconfig
  const key = 'buster';
  const token = jwt.sign({ id }, key);
}

// todo create in-code types? other introspection possible?
export const getUser = (token: string): object => {
  // decode jwt, return user object
  return {};
}