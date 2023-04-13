import { IUpdateRoleData } from '../domain/models/IUpdateRoleData.model';
import { IRolesRepository } from '../domain/repositories/IRolesRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class UpdateRoleService {
  constructor(
    private rolesRepository: IRolesRepository
  ) {}

  async execute({ name, id }: IUpdateRoleData) {
    const roleExists = await this.rolesRepository.findById(id);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    if(!name) {
      throw new Error('Nothing to change');
    }

    await invalidateRedis('sloteam-ROLES_LIST');

    await this.rolesRepository.update({ name, id });
  }
}
