import DevelopersRepository from '../repositories/DevelopersRepository';

class ListDevelopersService {
  async execute() {
    const developers = await DevelopersRepository.index();
    return developers;
  }
}

export default new ListDevelopersService();
