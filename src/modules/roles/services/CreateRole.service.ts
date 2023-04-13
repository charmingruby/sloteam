import { ICreateRoleData } from '../domain/models/ICreateRoleData.model';
import { IRolesRepository } from '../domain/repositories/IRolesRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

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

    await invalidateRedis('sloteam-ROLES_LIST');

    await this.rolesRepository.create({ name });
  }
}

