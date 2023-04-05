import DevelopersRepository from '../repositories/DevelopersRepository';

class DeveloperDetailsService {
  async execute(developerId: string) {
    const developer = await DevelopersRepository.findById(developerId);

    if (!developer) {
      throw new Error('Developer doesn\'t exists');
    }

    return developer;
  }

}

export default new DeveloperDetailsService();
