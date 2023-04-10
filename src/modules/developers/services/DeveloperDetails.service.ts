import { IDevelopersRepository } from '../domain/repositories/IDevelopersRepository';

export class DeveloperDetailsService {
  constructor(
    private developersRepository: IDevelopersRepository
  ) {}

  async execute(developerId: string) {
    const developer = await this.developersRepository.findById(developerId);

    if (!developer) {
      throw new Error('Developer doesn\'t exists');
    }

    return developer;
  }
}
