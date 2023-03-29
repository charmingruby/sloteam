import DevelopersRepository from '../repositories/DevelopersRepository';

class ListDevelopersUseCase {
  async execute() {
    const developers = await DevelopersRepository.index();
    return developers;
  }
}

export default new ListDevelopersUseCase();
