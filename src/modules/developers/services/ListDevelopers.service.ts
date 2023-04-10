import { IDevelopersRepository } from '../domain/repositories/IDevelopersRepository';

export class ListDevelopersService {
  constructor(
    private developersRepository: IDevelopersRepository
  ) {}

  async execute() {
    const developers = await this.developersRepository.index();

    return developers;
  }
}

