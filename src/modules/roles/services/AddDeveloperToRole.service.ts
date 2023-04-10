import { IDevelopersRepository } from '../../developers/domain/repositories/IDevelopersRepository';
import { IDeveloperRoleData } from '../domain/models/IDeveloperRoleData.model';
import { IRolesRepository } from '../domain/repositories/IRolesRepository';

export class AddDeveloperToRoleService {
  constructor(
    private developersRepository: IDevelopersRepository,
    private rolesRepository: IRolesRepository
  ) {}

  async execute({ roleId, developerId }: IDeveloperRoleData) {
    if (!developerId) {
      throw new Error('Developer ID is required');
    }

    const roleExists = await this.rolesRepository.findById(roleId);
    if (!roleExists) {
      throw new Error('This role doesn\'t exists');
    }

    const developerExists = await this.developersRepository.findById(developerId);
    if (!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsAlreadyInRole = await this.rolesRepository.checkDeveloperInRole({ roleId, developerId });
    if (developerIsAlreadyInRole) {
      throw new Error('This developer is already in this role');
    }

    await this.rolesRepository.addDeveloperToRole({ roleId, developerId });
  }
}
