import { TechnologyType } from '../types/TechnologyType';
import { prisma } from '../../../libs/prisma';

class TechnologiesRepository {
  async index() {
    return await prisma.technology.findMany();
  }

  async create({ name, description }: TechnologyType) {
    return await prisma.technology.create({
      data: {
        name: name,
        description: description
      }
    });
  }

  async findById(id: string) {
    return await prisma.technology.findFirst({
      where: {
        id: id
      }
    });
  }

  async update({ id, name, description }: TechnologyType) {
    return await prisma.technology.update({
      where: {
        id: id
      },
      data: {
        name: name,
        description: description
      }
    });
  }

  async delete(id: string) {
    return await prisma.technology.delete({
      where: {
        id: id
      }
    });
  }
}

export default new TechnologiesRepository();
