import { prisma } from '../../../libs/prisma';
import { RolesType } from '../types/RolesType';

interface DeveloperRoleTypes {
  roleId: string
  developerId: string
}

class RolesRepository {
  async index() {
    return await prisma.role.findMany({
      include: {
        developers: {
          include: {
            developer: {
              select: {
                id: true,
                name: true,
                last_name: true,
                email: true,
                icon: true
              }
            }
          }
        }
      },
    });
  }

  async findById(roleId: string) {
    return await prisma.role.findFirst({
      where: {
        id: roleId
      },
      include: {
        developers: {
          include: {
            developer: {
              select: {
                id: true,
                name: true,
                last_name: true,
                email: true,
                icon: true
              }
            }
          },
        },
      },
    });
  }

  async create({ name }: RolesType) {
    return await prisma.role.create({
      data: {
        name: name
      },
      select: {
        id: true,
        name: true
      }
    });
  }

  async update({ name, id }: RolesType) {
    return await prisma.role.update({
      where: {
        id: id
      },
      data: {
        name: name
      },
      select: {
        id: true,
        name: true
      }
    });
  }

  async delete(roleId: string) {
    return await prisma.role.delete({
      where: {
        id: roleId
      }
    });
  }

  async findByName({ name }: RolesType) {
    return await prisma.role.findFirst({
      where: {
        name: name
      },
      select: {
        id: true,
        name: true
      }
    });
  }

  async addDeveloperToRole({ roleId, developerId }: DeveloperRoleTypes) {
    return await prisma.developersRoles.create({
      data: {
        roleId: roleId,
        developerId: developerId
      }
    });
  }

  async removeDeveloperFromRole({ roleId, developerId }: DeveloperRoleTypes) {
    return await prisma.developersRoles.delete({
      where: {
        developerId_roleId: {
          developerId: developerId,
          roleId: roleId
        }
      }
    });
  }

  async checkDeveloperInRole({ roleId, developerId }: DeveloperRoleTypes) {
    return await prisma.role.findFirst({
      where: {
        id: roleId,
        developers: {
          some: {
            developerId: developerId
          }
        }
      },
    });
  }
}

export default new RolesRepository();
