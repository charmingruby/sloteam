import { RolesType } from '../types/RolesType';
import RolesRepository from '../repositories/RolesRepository';

class CreateRoleService {
  async execute({ name }: RolesType) {
    if (!name)
      throw new Error('Name is required');

    const roleAlreadyExists = await RolesRepository.findByName({ name });
    if (roleAlreadyExists)
      throw new Error('This role already exists');


    const role = await RolesRepository.create({ name });

    return role;
  }
}

export default new CreateRoleService();
