import RolesRepository from '../repositories/RolesRepository';

interface RemoveDeveloperFromRoleTypes {
  roleId: string
  developerId: string
}

class RemoveDeveloperFromRoleUseCase {
  async execute({ roleId, developerId }: RemoveDeveloperFromRoleTypes) {
    const removedDeveloper = RolesRepository.removeDeveloperFromRole({ roleId, developerId });
    return removedDeveloper;
  }
}

export default new RemoveDeveloperFromRoleUseCase();
