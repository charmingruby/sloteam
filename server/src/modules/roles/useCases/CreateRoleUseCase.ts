import { RolesDTO } from '../dtos/RolesDTO';
import RoleRepositories from '../repositories/RoleRepositories';

class CreateRoleUseCase {
  async execute({ name }: RolesDTO) {
    if (!name)
      throw new Error('Name is required');

    const roleAlreadyExists = await RoleRepositories.findByName({ name });
    if (roleAlreadyExists)
      throw new Error('This role already exists');


    const role = await RoleRepositories.create({ name });

    return role;
  }
}

export default new CreateRoleUseCase();
