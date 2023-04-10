import { IRolesRepository } from '../domain/repositories/IRolesRepository';

export class RoleDetailsService {
  constructor(
    private rolesRepository: IRolesRepository
  ) {}

  async execute(roleId: string) {
    const role = await this.rolesRepository.findById(roleId);
    if (!role)
      throw new Error('This role doesn\'t exists');

    return role;
  }
}
