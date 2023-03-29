import DevelopersRepository from '../repositories/DevelopersRepository';

class DeveloperDetailsUseCase {
  async execute(developerId: string) {
    const developer = await DevelopersRepository.findById(developerId);

    if (!developer) {
      throw new Error('Developer doesn\'t exists');
    }

    return developer;
  }

}

export default new DeveloperDetailsUseCase();
