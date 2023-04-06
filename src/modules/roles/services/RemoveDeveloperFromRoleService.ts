import RolesRepository from '../repositories/RolesRepository';

interface RemoveDeveloperFromRoleTypes {
  roleId: string
  developerId: string
}

class RemoveDeveloperFromRoleService {
  async execute({ roleId, developerId }: RemoveDeveloperFromRoleTypes) {
    const removedDeveloper = RolesRepository.removeDeveloperFromRole({ roleId, developerId });
    return removedDeveloper;
  }
}

export default new RemoveDeveloperFromRoleService();
