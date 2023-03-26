import { RolesDTO } from '../dtos/RolesDTO';
import RoleRepositories from '../repositories/RoleRepositories';

interface UpdateRoleTypes {
  name: string
  roleId: string
}

class UpdateRoleUseCase {
  async execute({ name, roleId }: UpdateRoleTypes) {
    const roleExists = await RoleRepositories.findById(roleId);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    const role = await RoleRepositories.update({ name, roleId });

    return role;
  }
}

export default new UpdateRoleUseCase();
