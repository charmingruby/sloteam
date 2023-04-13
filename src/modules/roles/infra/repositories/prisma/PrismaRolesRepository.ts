import { Role } from '@prisma/client';
import { prisma } from '../../../../../config/prisma';
import { ICreateRoleData } from '../../../domain/models/ICreateRoleData.model';
import { IDeveloperRoleData } from '../../../domain/models/IDeveloperRoleData.model';
import { IUpdateRoleData } from '../../../domain/models/IUpdateRoleData.model';
import { IRolesRepository } from '../../../domain/repositories/IRolesRepository';

export class PrismaRolesRepository implements IRolesRepository {
  async index(): Promise<Role[] | undefined> {
    return await prisma.role.findMany({
      include: {
        developers: true
      },
    });
  }

  async findById(roleId: string): Promise<Role | undefined> {
    return await prisma.role.findFirst({
      where: {
        id: roleId
      },
      include: {
        developers: true
      }
    });
  }

  async findByName(name: string): Promise<Role | undefined> {
    return await prisma.role.findFirst({
      where: {
        name
      },
    });
  }

  async create({ name }: ICreateRoleData): Promise<void> {
    await prisma.role.create({
      data: {
        name
      },
    });
  }

  async update({ name, id }: IUpdateRoleData): Promise<void> {
    await prisma.role.update({
      where: {
        id
      },
      data: {
        name
      },
    });
  }

  async delete(roleId: string): Promise<void> {
    await prisma.role.delete({
      where: {
        id: roleId
      }
    });
  }

  async addDeveloperToRole({ roleId, developerId }: IDeveloperRoleData): Promise<void> {
    await prisma.role.update({
      where: {
        id: roleId
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

  async removeDeveloperFromRole({ roleId, developerId }: IDeveloperRoleData): Promise<void> {
    await prisma.role.update({
      where: {
        id: roleId
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

  async checkDeveloperInRole({ roleId, developerId }: IDeveloperRoleData): Promise<Role | undefined> {
    return await prisma.role.findFirst({
      where: {
        id: roleId,
        developers: {
          some: {
            id: developerId
          }
        }
      },
    });
  }
}

