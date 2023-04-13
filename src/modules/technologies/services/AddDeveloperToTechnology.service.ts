import { IDevelopersRepository } from '../../developers/domain/repositories/IDevelopersRepository';
import { IDeveloperTechnologyData } from '../domain/models/IDeveloperTechnologyData.model';
import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';

export class AddDeveloperToTechnologyService {
  constructor(
    private technologiesRepository: ITechnologiesRepository,
    private developersRepository: IDevelopersRepository
  ) {}

  async execute({ technologyId, developerId }: IDeveloperTechnologyData) {
    const technologyExists = this.technologiesRepository.findById(technologyId);
    if (!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    const developerExists = this.developersRepository.findById(technologyId);
    if (!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsAlreadyInTechnology = await this.technologiesRepository.checkDeveloperInTechnology({technologyId, developerId});
    if (developerIsAlreadyInTechnology) {
      throw new Error('This developer is already in this technology');
    }

    await this.technologiesRepository.addDeveloperToTechnology({technologyId, developerId});
  }
}
