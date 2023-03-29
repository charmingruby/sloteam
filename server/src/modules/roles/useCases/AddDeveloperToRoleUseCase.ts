import RolesRepository from '../repositories/RolesRepository';
import DevelopersRepository from '../../developers/repositories/DevelopersRepository';

interface AddDeveloperToRoleTypes {
  roleId: string
  developerId: string
}

class AddDeveloperToRoleUseCase {
  async execute({ roleId, developerId }: AddDeveloperToRoleTypes) {
    if (!developerId) {
      throw new Error('Developer is required');
    }

    const roleExists = await RolesRepository.findById(roleId);
    if (!roleExists) {
      throw new Error('This role doesn\'t exists');
    }

    const developerExists = await DevelopersRepository.findById(developerId);
    if (!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsAlreadyInRole = await RolesRepository.checkDeveloperInRole({ roleId, developerId });
    if (developerIsAlreadyInRole) {
      throw new Error('This developer is already in this role');
    }

    const developer = await RolesRepository.addDeveloperToRole({ roleId, developerId });
    return developer;
  }
}

export default new AddDeveloperToRoleUseCase();
