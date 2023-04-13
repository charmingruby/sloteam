import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';
import { getRedis } from '../../../shared/cache/RedisCache';
import { Technology } from '@prisma/client';
import { setRedis } from '../../../shared/cache/RedisCache';

export class ListTechnologiesService {
  constructor(
    private technologiesRepository: ITechnologiesRepository
  ) {}

  async execute() {
    let technologies = await getRedis<Technology[]>(
      'sloteam-TECHNOLOGIES_LIST'
    );

    if(!technologies) {
      technologies = await this.technologiesRepository.index();

      await setRedis('sloteam-TECHNOLOGIES_LIST', technologies);
    }

    return technologies;
  }
}
