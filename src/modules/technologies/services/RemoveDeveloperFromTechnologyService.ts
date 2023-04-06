import TechnologiesRepository from "../repositories/TechnologiesRepository"
import DevelopersRepository from '../../developers/repositories/DevelopersRepository';

class RemoveDeveloperFromTechnologyService {
  async execute(id: string, developerId: string) {
    const technologyExists = TechnologiesRepository.findById(id);
    if (!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    const developerExists = DevelopersRepository.findById(id);
    if (!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsAlreadyInTechnology = await TechnologiesRepository.checkDeveloperInTechnology(id, developerId);
    if (!developerIsAlreadyInTechnology) {
      throw new Error("This developer isn't in this technology");
    }

    const technology = await TechnologiesRepository.removeDeveloperFromTechnology(id, developerId);
    return technology;
  }
}

export default new RemoveDeveloperFromTechnologyService()
