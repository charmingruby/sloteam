import { Developer } from '@prisma/client';
import { prisma } from '../../../../../config/prisma';
import { ICreateDeveloperData } from '../../../domain/models/ICreateDeveloperData.model';
import { IUpdateDeveloperData } from '../../../domain/models/IUpdateDeveloperData.model';
import { IDevelopersRepository } from '../../../domain/repositories/IDevelopersRepository';

export class PrismaDevelopersRepository implements IDevelopersRepository {
  async index(): Promise<Developer[] | undefined> {
    return await prisma.developer.findMany();
  }

  async create({ name, last_name, age, icon, email }: ICreateDeveloperData): Promise<void>{
    await prisma.developer.create({
      data: {
        name,
        last_name,
        age,
        icon,
        email
      }
    });
  }

  async findById(id: string): Promise<Developer | undefined> {
    return prisma.developer.findFirst({
      where: {
        id
      },
      include: {
        technologies: {
          include: {
            technology: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        },
        roles: {
          include: {
            role: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });
  }

  async findByEmail(email: string): Promise<Developer | undefined> {
    return await prisma.developer.findFirst({
      where: {
        email
      }
    });
  }

  async update({ id, name, last_name, age, icon, email }: IUpdateDeveloperData): Promise<void> {
    await prisma.developer.update({
      where: {
        id
      },
      data: {
        name,
        last_name,
        age,
        icon,
        email,
      }
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.developer.delete({
      where: {
        id: id
      }
    });
  }
}
