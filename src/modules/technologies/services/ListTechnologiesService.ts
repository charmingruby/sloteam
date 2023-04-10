import { ITechnologiesRepository } from '../domain/repositories/ITechnologiesRepository';

export class ListTechnologiesService {
  constructor(
    private technologiesRepository: ITechnologiesRepository
  ) {}

  async execute() {
    const technologies = await this.technologiesRepository.index();
    return technologies;
  }
}
