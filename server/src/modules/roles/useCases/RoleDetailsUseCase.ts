import RolesRepository from '../repositories/RolesRepository';

class RoleDetailsUseCase {
  async execute(roleId: string) {
    const role = await RolesRepository.findById(roleId);
    if (!role)
      throw new Error('This role doesn\'t exists');

    return role;
  }
}

export default new RoleDetailsUseCase();
