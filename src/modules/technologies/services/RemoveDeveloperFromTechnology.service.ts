import { IDevelopersRepository } from '../../developers/domain/repositories/IDevelopersRepository';
import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class RemoveDeveloperFromTechnologyService {
  constructor(
    private technologiesRepository: ITechnologiesRepository,
    private developersRepository: IDevelopersRepository
  ) {}

  async execute(technologyId: string, developerId: string) {
    if(!technologyId) {
      throw new Error('Technology ID is required');
    }

    if(!developerId) {
      throw new Error('Developer ID is required');
    }

    const technologyExists = this.technologiesRepository.findById(technologyId);
    if (!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    const developerExists = this.developersRepository.findById(technologyId);
    if (!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsAlreadyInTechnology = await this.technologiesRepository.checkDeveloperInTechnology({technologyId, developerId});
    if (!developerIsAlreadyInTechnology) {
      throw new Error('This developer isn\'t in this technology');
    }

    await invalidateRedis('sloteam-TECHNOLOGIES_LIST');

    await this.technologiesRepository.removeDeveloperFromTechnology({technologyId, developerId});
  }
}
