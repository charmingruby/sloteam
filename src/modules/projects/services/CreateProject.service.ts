import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';
import { ICreateProjectData } from '../domain/models/ICreateProjectData.model';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class CreateProjectService {
  constructor(
    private projectsRepository: IProjectsRepository
  ) {}

  async execute({ name, description, icon }: ICreateProjectData) {
    if(!name) {
      throw new Error('Name is required');
    }

    if(description.length < 1) {
      throw new Error('Description is required');
    }

    const projectAlreadyExists = await this.projectsRepository.findByName(name);

    if(projectAlreadyExists) {
      throw new Error('This name is already in use');
    }

    invalidateRedis('sloteam-PROJECTS_LIST');

    await this.projectsRepository.create({
      name, description, icon
    });
  }
}
