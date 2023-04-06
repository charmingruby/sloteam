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

  async addDeveloperToTechnology(id: string, developerId: string) {
    return await prisma.developersTechnologies.create({
      data: {
        technologyId: id,
        developerId: developerId
      }
    })
  }

  async removeDeveloperFromTechnology(id: string, developerId: string) {
    return await prisma.developersTechnologies.delete({
      where: {
        developerId_technologyId: {
          developerId: developerId,
          technologyId: id
        }
      }
    })
  }

  async checkDeveloperInTechnology(id: string, developerId: string) {
    return await prisma.developersTechnologies.findFirst({
      where: {
        developerId: developerId,
        technologyId: id
      }
    })
  }
}

export default new TechnologiesRepository();
