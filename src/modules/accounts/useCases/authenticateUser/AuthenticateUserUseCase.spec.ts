import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UserRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '01234',
      email: 'user@test.com.br',
      name: 'User Test',
      password: 'password',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'nonexistent@email.com',
        password: 'Nonexistent',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate an user with wrong password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '01234',
        email: 'user@test.com.br',
        name: 'User Test',
        password: 'password',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'wrongPassword',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
