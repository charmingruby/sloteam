import { IRolesRepository } from '../domain/repositories/IRolesRepository';

export class ListRolesService {
  constructor(
    private rolesRepository: IRolesRepository
  ) {}

  async execute() {
    const roles = await this.rolesRepository.index();

    return roles;
  }
}
