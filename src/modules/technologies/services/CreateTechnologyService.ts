import { ICreateTechnologyData } from '../domain/models/ICreateTechnologyData';
import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';

export class CreateTechnologyService {
  constructor(
    private technologiesRepository: ITechnologiesRepository
  ) {}

  async execute({ name, description }: ICreateTechnologyData) {
    if(!name) {
      throw new Error('Name is required');
    }

    if(!description) {
      throw new Error('Description is required');
    }

    const technologyAlreadyExists = await this.technologiesRepository.findByName(name);
    if(technologyAlreadyExists) {
      throw new Error('This name is already in use');
    }

    await this.technologiesRepository.create({ name, description });
  }
}
