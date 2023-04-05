import RolesRepository from '../repositories/RolesRepository';

import { RolesType } from '../types/RolesType';

class UpdateRoleService {
  async execute({ name, id }: RolesType) {
    const roleExists = await RolesRepository.findById(id);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    const role = await RolesRepository.update({ name, id });

    return role;
  }
}

export default new UpdateRoleService();
