import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('No token provided', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      'd4020411cbe1e85e8702e4830ec73aeb',
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User does not exists', 401);
    }
    request.user = { id: user_id };
    next();
  } catch (error) {
    throw new AppError('Invalid Token', 401);
  }
}
