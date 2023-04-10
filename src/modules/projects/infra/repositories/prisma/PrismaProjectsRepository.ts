import { Project } from '@prisma/client';
import { prisma } from '../../../../../config/prisma';
import { IProjectsRepository } from '../../../domain/repositories/IProjectsRepository';
import { ICreateProjectData } from '../../../domain/models/ICreateProjectData.model';
import { IUpdateProjectData } from '../../../domain/models/IUpdateProjectData.model';
import { IUpdateProjectStatusData } from '../../../domain/models/IUpdateProjectStatusData';

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
        id: id
      }
    });
  }

  async updateStatus({id, development}: IUpdateProjectStatusData): Promise<void> {
    await prisma.project.update({
      where: {
        id:id
      },
      data: {
        development
      }
    });
  }
}
