import { User } from '@prisma/client';
import { prisma } from '../../../../../config/prisma';
import { ICreateUserData } from '../../../domain/models/ICreateUserData.model';
import { IUsersRepository } from '../../../domain/repositories/IUsersRepository';

export class PrismaUsersRepository implements IUsersRepository {
  async create({ name, email, password, icon }: ICreateUserData): Promise<void> {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
        icon,
      }
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await prisma.user.findFirst({
      where: {
        email
      },
    });
  }
}
