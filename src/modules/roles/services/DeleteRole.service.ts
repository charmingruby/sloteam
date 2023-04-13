import { IRolesRepository } from '../domain/repositories/IRolesRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class DeleteRoleService {
  constructor(
    private rolesRepository: IRolesRepository
  ) {}

  async execute(roleId: string) {
    const roleExists = await this.rolesRepository.findById(roleId);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    await invalidateRedis('sloteam-ROLES_LIST');

    await this.rolesRepository.delete(roleId);
  }
}
