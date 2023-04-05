import { prisma } from '../../../libs/prisma';
import { DevelopersType } from '../types/DevelopersType';

class DevelopersRepository {
  async index() {
    return await prisma.developer.findMany();
  }

  async create({ name, lastName, age, iconPath, email }: DevelopersType) {
    return await prisma.developer.create({
      data: {
        name: name,
        last_name: lastName,
        age: age,
        icon: iconPath,
        email: email
      }
    });
  }

  async findById(developerId: string) {
    return prisma.developer.findFirst({
      where: {
        id: developerId
      },
      include: {
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

  async findByEmail(email: string) {
    return await prisma.developer.findFirst({
      where: {
        email: email
      },
      select: {
        id: true,
      }
    });
  }

  async update({ id, name, lastName, age, iconPath, email }: DevelopersType) {
    return await prisma.developer.update({
      where: {
        id: id
      },
      data: {
        name: name,
        last_name: lastName,
        age: age,
        icon: iconPath,
        email: email
      }
    });
  }

  async delete(id: string) {
    return await prisma.developer.delete({
      where: {
        id: id
      }
    });
  }
}


export default new DevelopersRepository();
