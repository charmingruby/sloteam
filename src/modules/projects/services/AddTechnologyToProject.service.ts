import { ITechnologiesRepository } from '../../technologies/domain/repositories/ITechnologiesRepository';
import { ITechnologyProjectData } from '../domain/models/ITechnologyProjectData.model';
import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class AddTechnologyToProjectService {
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

    const projectExists = await this.projectsRepository.findById(projectId);
    if(!projectExists) {
      throw new Error('This project doesn\'t exists');
    }

    const technologyExists = await this.technologiesRepository.findById(technologyId);
    if(!technologyExists) {
      throw new Error('This technology doesn\'t exists');
    }

    const technologyIsAlreadyInProject = await this.projectsRepository.checkTechnologyInProject({projectId, technologyId});
    if(technologyIsAlreadyInProject) {
      throw new Error('This technology is already in this project');
    }

    invalidateRedis('sloteam-PROJECTS_LIST');

    this.projectsRepository.addTechnologyToProject({projectId, technologyId});
  }
}
