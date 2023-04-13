import { Project } from '@prisma/client';
import { prisma } from '../../../../../config/prisma';
import { IProjectsRepository } from '../../../domain/repositories/IProjectsRepository';
import { ICreateProjectData } from '../../../domain/models/ICreateProjectData.model';
import { IUpdateProjectData } from '../../../domain/models/IUpdateProjectData.model';
import { IUpdateProjectStatusData } from '../../../domain/models/IUpdateProjectStatusData';
import { ITechnologyProjectData } from '../../../domain/models/ITechnologyProjectData.model';
import { IDeveloperProjectData } from '../../../domain/models/IDeveloperProjectData';

export class PrismaProjectsRepository implements IProjectsRepository {
  async index(): Promise<Project[] | undefined> {
    return await prisma.project.findMany();
  }

  async findByName(name: string): Promise<Project | undefined> {
    return await prisma.project.findFirst({
      where: {
        name: name
      }
    });
  }

  async findById(id: string): Promise<Project | undefined> {
    return await prisma.project.findFirst({
      where: {
        id
      },
      include: {
        technologies: true,
        developers: true
      }
    });
  }

  async create(data: ICreateProjectData): Promise<void> {
    await prisma.project.create({
      data
    });
  }

  async update({id, description, icon}: IUpdateProjectData): Promise<void> {
    await prisma.project.update({
      where: {
        id
      },
      data: {
        description,
        icon
      }
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.project.delete({
      where: {
        id
      }
    });
  }

  async updateStatus({id, development}: IUpdateProjectStatusData): Promise<void> {
    await prisma.project.update({
      where: {
        id
      },
      data: {
        development
      }
    });
  }

  async checkTechnologyInProject({projectId, technologyId}: ITechnologyProjectData): Promise<Project | undefined> {
    return await prisma.project.findFirst({
      where: {
        id: projectId,
        technologies: {
          some: {
            id: technologyId
          }
        }
      }
    });
  }

  async addTechnologyToProject({projectId, technologyId}: ITechnologyProjectData): Promise<void> {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        technologies: {
          connect: {
            id: technologyId
          }
        }
      }
    });
  }
  async removeTechnologyFromProject({projectId, technologyId}: ITechnologyProjectData): Promise<void> {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        technologies: {
          disconnect: {
            id: technologyId
          }
        }
      }
    });
  }

  async addDeveloperToProject({projectId, developerId}: IDeveloperProjectData): Promise<void> {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        developers: {
          connect: {
            id: developerId
          }
        }
      }
    });
  }

  async removeDeveloperFromProject({projectId, developerId}: IDeveloperProjectData): Promise<void> {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        developers: {
          disconnect: {
            id: developerId
          }
        }
      }
    });
  }

  async checkDeveloperInProject({projectId, developerId}: IDeveloperProjectData): Promise<Project | undefined> {
    return await prisma.project.findFirst({
      where: {
        id: projectId,
        developers: {
          some: {
            id: developerId
          }
        }
      }
    });
  }
}
