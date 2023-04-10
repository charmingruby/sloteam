import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';

export class TechnologyDetailsService {
  constructor(
    private technologiesRepository: ITechnologiesRepository
  ) {}

  async execute(id: string) {
    const technology = await this.technologiesRepository.findById(id);

    if (!technology) {
      throw new Error('This technology doesn\'t exists');
    }

    return technology;
  }
}
