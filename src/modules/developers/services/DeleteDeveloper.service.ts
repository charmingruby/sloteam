import { IDevelopersRepository } from '../domain/repositories/IDevelopersRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class DeleteDeveloperService {
  constructor(
    private developersRepository: IDevelopersRepository
  ) {}

  async execute(id: string) {
    const developerExists = await this.developersRepository.findById(id);
    if (!developerExists)
      throw new Error('This developer doesn\'t exists');

    invalidateRedis('sloteam-DEVELOPERS_LIST');

    await this.developersRepository.delete(id);
  }
}
