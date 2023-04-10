import { IDevelopersRepository } from '../domain/repositories/IDevelopersRepository';

export class DeleteDeveloperService {
  constructor(
    private developersRepository: IDevelopersRepository
  ) {}

  async execute(id: string) {
    const developerExists = await this.developersRepository.findById(id);
    if (!developerExists)
      throw new Error('This developer doesn\'t exists');

    await this.developersRepository.delete(id);
  }
}
