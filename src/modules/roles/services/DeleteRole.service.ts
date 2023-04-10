import { IRolesRepository } from '../domain/repositories/IRolesRepository';

export class DeleteRoleService {
  constructor(
    private rolesRepository: IRolesRepository
  ) {}

  async execute(roleId: string) {
    const roleExists = await this.rolesRepository.findById(roleId);
    if (!roleExists)
      throw new Error('This role doesn\'t exists');

    await this.rolesRepository.delete(roleId);
  }
}
