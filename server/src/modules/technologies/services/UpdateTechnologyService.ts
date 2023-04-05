import TechnologiesRepository from '../repositories/TechnologiesRepository';
import { TechnologyType } from '../types/TechnologyType';

class UpdateTechnologyService {
  async execute({ id, name, description }: TechnologyType) {
    if (!name && !description) {
      throw new Error('Nothing to change');
    }

    const technology = await TechnologiesRepository.update({ id, name, description });
    return technology;
  }
}

export default new UpdateTechnologyService();
3;
