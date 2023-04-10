import { User } from '@prisma/client';
import { ICreateUserData } from '../models/ICreateUserData.model';

export interface IUsersRepository {
  create: (data: ICreateUserData) => Promise<void>
  findByEmail: (email: string) => Promise<User | undefined>
}
