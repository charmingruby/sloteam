import RolesRepository from '../repositories/RolesRepository';

class UpdateRoleUseCase {
  async execute(roleId: string) {
    const roleExists = await RolesRepository.findById(roleId);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    const role = await RolesRepository.delete(roleId);

    return role;
  }
}

export default new UpdateRoleUseCase();
