import { RolesDTO } from '../dtos/RolesDTO';
import RoleRepositories from '../repositories/RoleRepositories';

class RoleDetailsUseCase {
  async execute(roleId: string) {
    const role = await RoleRepositories.findById(roleId);
    if (!role)
      throw new Error('This role doesn\'t exists');

    return role;
  }
}

export default new RoleDetailsUseCase();
