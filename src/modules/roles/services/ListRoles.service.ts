import { Role } from '@prisma/client';
import { getRedis, setRedis } from '../../../shared/cache/RedisCache';
import { IRolesRepository } from '../domain/repositories/IRolesRepository';

export class ListRolesService {
  constructor(
    private rolesRepository: IRolesRepository
  ) {}

  async execute() {
    let roles = await getRedis<Role[]>(
      'sloteam-ROLES_LIST'
    );

    if(!roles) {
      roles = await this.rolesRepository.index();

      await setRedis('sloteam-ROLES_LIST', roles);
    }

    return roles;
  }
}
