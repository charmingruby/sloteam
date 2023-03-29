import { prisma } from '../../../libs/prisma';
import { DevelopersDTO } from '../dtos/DevelopersDTO';

class DevelopersRepository {
  async index() {
    return await prisma.developer.findMany();
  }

  async create({ name, lastName, age, iconPath, email }: DevelopersDTO) {
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
}


export default new DevelopersRepository();
