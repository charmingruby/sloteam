import { IUpdateTechnologyData } from '../domain/models/IUpdateTechnologyData.model';
import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';

export class UpdateTechnologyService {
  constructor(
    private technologiesRepository: ITechnologiesRepository
  ) {}

  async execute({ id, name, description }: IUpdateTechnologyData) {
    const technologyExists = this.technologiesRepository.findById(id);
    if(!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    if (!name && !description) {
      throw new Error('Nothing to change');
    }

    await this.technologiesRepository.update({ id, name, description });
  }
}
