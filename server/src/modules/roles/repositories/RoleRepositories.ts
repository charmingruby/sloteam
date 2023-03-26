import { prisma } from '../../../libs/prisma';
import { RolesDTO } from '../dtos/RolesDTO';

interface UpdateRoleTypes {
  name: string
  roleId: string
}

class RoleRepositories {
  async index() {
    return await prisma.role.findMany();
  }

  async findById(roleId: string) {
    return await prisma.role.findFirst({
      where: {
        id: roleId
      },
      select: {
        id: true,
        name: true
      }
    });
  }

  async create({ name }: RolesDTO) {
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

  async update({ name, roleId }: UpdateRoleTypes) {
    return await prisma.role.update({
      where: {
        id: roleId
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

  async findByName({ name }: RolesDTO) {
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
}

export default new RoleRepositories();
