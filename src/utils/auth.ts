import * as jwt from 'jsonwebtoken';
import { User } from '../generated/prisma-client';

// todo movetoconfig
const key = 'buster';

export const createJWT = (user: User): string => {
  const { id } = user;
  const token = jwt.sign({ id }, key);
  return token;
};

export const readJWT = (token: string): object | null => {
  try {
    const decoded = jwt.verify(token, key);
    if (typeof decoded === 'object') return decoded;
    return null;
  } catch {
    return null;
  }
};

// todo create in-code types? other introspection possible?
export const getUser = (token: string): object =>
  // decode jwt, return user object
  ({});
