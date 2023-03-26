import RoleRepositories from '../repositories/RoleRepositories';

class ListRolesUseCase {
  async execute() {
    const roles = await RoleRepositories.index();
    return roles;
  }
}

export default new ListRolesUseCase();
