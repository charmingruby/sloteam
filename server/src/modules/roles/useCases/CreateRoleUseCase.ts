import { RolesDTO } from '../dtos/RolesDTO';
import RolesRepository from '../repositories/RolesRepository';

class CreateRoleUseCase {
  async execute({ name }: RolesDTO) {
    if (!name)
      throw new Error('Name is required');

    const roleAlreadyExists = await RolesRepository.findByName({ name });
    if (roleAlreadyExists)
      throw new Error('This role already exists');


    const role = await RolesRepository.create({ name });

    return role;
  }
}

export default new CreateRoleUseCase();
