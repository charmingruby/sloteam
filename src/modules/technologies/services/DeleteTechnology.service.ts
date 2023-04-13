import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class DeleteTechnologyService {
  constructor(
    private technologiesRepository:  ITechnologiesRepository
  ) {}

  async execute(id: string) {
    const technologyExists = this.technologiesRepository.findById(id);
    if(!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    await invalidateRedis('sloteam-TECHNOLOGIES_LIST');

    await this.technologiesRepository.delete(id);
  }
}
