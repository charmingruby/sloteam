import RolesRepository from '../repositories/RolesRepository';

class ListRolesService {
  async execute() {
    const roles = await RolesRepository.index();
    return roles;
  }
}

export default new ListRolesService();
