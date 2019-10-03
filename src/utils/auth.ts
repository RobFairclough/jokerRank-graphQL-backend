import * as jwt from 'jsonwebtoken';
import { User, UserType } from '../generated/prisma-client';
import { AuthToken } from '../types/Server';

// todo movetoconfig
const key = 'buster';

export const createJWT = (user: User): string => {
  const { id, type } = user;
  const token = jwt.sign({ id, isAdmin: type === "ADMIN"}, key);
  return token;
};

export const readJWT = (token: string): AuthToken | null => {
  try {
    const trimmedToken = token.split('Bearer: ')[1]
    const decoded = jwt.verify(trimmedToken, key);

    if (typeof decoded !== 'string') return decoded as AuthToken;
    return null;
  } catch {
    return null;
  }
};

