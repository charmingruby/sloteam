import { Project } from '@prisma/client';
import { getRedis, setRedis } from '../../../shared/cache/RedisCache';
import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';

export class ListProjectsService {
  constructor(
    private projectsRepository: IProjectsRepository
  )
  {}

  async execute() {
    let projects = await getRedis<Project[]>(
      'sloteam-PROJECTS_LIST'
    );

    if(!projects) {
      projects = await this.projectsRepository.index();

      setRedis('sloteam-PROJECTS_LIST', projects);
    }

    return projects;
  }
}
