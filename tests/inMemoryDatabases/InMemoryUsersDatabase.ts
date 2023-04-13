import { User } from '@prisma/client';
import { ICreateUserData } from '../../src/modules/users/domain/models/ICreateUserData.model';
import { IUsersRepository } from '../../src/modules/users/domain/repositories/IUsersRepository';

export class InMemoryUsersDatabase implements IUsersRepository {
  create: (data: ICreateUserData) => Promise<void>;
  findByEmail: (email: string) => Promise<User>;
}
