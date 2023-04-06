import TechnologiesRepository from '../repositories/TechnologiesRepository';

class TechnologyDetailsService {
  async execute(id: string) {
    const technology = await TechnologiesRepository.findById(id);

    if (!technology) {
      throw new Error('This technology doesn\'t exists');
    }

    return technology;
  }
}

export default new TechnologyDetailsService();
