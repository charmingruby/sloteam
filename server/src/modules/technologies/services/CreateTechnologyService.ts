import { TechnologyType } from '../types/TechnologyType';
import TechnologiesRepository from '../repositories/TechnologiesRepository';

class CreateTechnologyService {
  async execute({ name, description }: TechnologyType) {
    const technology = await TechnologiesRepository.create({ name, description });
    return technology;
  }
}

export default new CreateTechnologyService();
