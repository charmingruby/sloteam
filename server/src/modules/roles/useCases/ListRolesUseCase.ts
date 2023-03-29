import RolesRepository from '../repositories/RolesRepository';

class ListRolesUseCase {
  async execute() {
    const roles = await RolesRepository.index();
    return roles;
  }
}

export default new ListRolesUseCase();
