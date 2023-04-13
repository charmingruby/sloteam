import { ITechnologiesRepository } from '../../technologies/domain/repositories/ITechnologiesRepository';
import { ITechnologyProjectData } from '../domain/models/ITechnologyProjectData.model';
import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class RemoveTechnologyFromProjectService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private technologiesRepository: ITechnologiesRepository
  ) {}

  async execute({projectId, technologyId}: ITechnologyProjectData) {
    if(!projectId) {
      throw new Error('Project ID is required');
    }

    if(!technologyId) {
      throw new Error('Technology ID is required');
    }

    const projectExists = this.projectsRepository.findById(projectId);
    if(!projectExists) {
      throw new Error('This project doesn\'t exists');
    }

    const technologyExists = this.technologiesRepository.findById(technologyId);
    if(!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    const technologyIsInProject = this.projectsRepository.checkTechnologyInProject({projectId, technologyId});
    if(!technologyIsInProject) {
      throw new Error('This technology isn\'t in this project');
    }

    invalidateRedis('sloteam-PROJECTS_LIST');

    await this.projectsRepository.removeTechnologyFromProject({projectId, technologyId});
  }
}
