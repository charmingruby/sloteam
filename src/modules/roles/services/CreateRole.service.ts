import { ICreateRoleData } from '../domain/models/ICreateRoleData.model';
import { IRolesRepository } from '../domain/repositories/IRolesRepository';

export class CreateRoleService {
  constructor(
    private rolesRepository: IRolesRepository
  ) {}

  async execute({ name }: ICreateRoleData) {
    if (!name)
      throw new Error('Name is required');

    const roleAlreadyExists = await this.rolesRepository.findByName(name);
    if (roleAlreadyExists)
      throw new Error('This role already exists');


    await this.rolesRepository.create({ name });
  }
}

