import { invalidateRedis } from '../../../shared/cache/RedisCache';
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

    await invalidateRedis('sloteam-TECHNOLOGIES_LIST');

    await this.technologiesRepository.create({ name, description });
  }
}
