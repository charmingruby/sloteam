import RolesRepository from '../repositories/RolesRepository';

interface UpdateRoleTypes {
  name: string
  roleId: string
}

class UpdateRoleUseCase {
  async execute({ name, roleId }: UpdateRoleTypes) {
    const roleExists = await RolesRepository.findById(roleId);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    const role = await RolesRepository.update({ name, roleId });

    return role;
  }
}

export default new UpdateRoleUseCase();
