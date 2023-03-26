import RoleRepositories from '../repositories/RoleRepositories';

class UpdateRoleUseCase {
  async execute(roleId: string) {
    const roleExists = await RoleRepositories.findById(roleId);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    const role = await RoleRepositories.delete(roleId);

    return role;
  }
}

export default new UpdateRoleUseCase();
