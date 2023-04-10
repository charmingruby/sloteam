import DevelopersRepository from '../../developers/repositories/DevelopersRepository';
import TechnologiesRepository from './../infra/repositories/TechnologiesRepository';

interface RequestTypes {
  id: string
  developerId: string
}

class AddDeveloperToTechnologyService {
  async execute({ id, developerId }: RequestTypes) {
    const technologyExists = TechnologiesRepository.findById(id);
    if (!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    const developerExists = DevelopersRepository.findById(id);
    if (!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsAlreadyInTechnology = await TechnologiesRepository.checkDeveloperInTechnology(id, developerId);
    if (developerIsAlreadyInTechnology) {
      throw new Error('This developer is already in this technology');
    }

    const technology = await TechnologiesRepository.addDeveloperToTechnology(id, developerId);
    return technology;
  }
}

export default new AddDeveloperToTechnologyService();
