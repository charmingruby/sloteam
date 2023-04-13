import { IDevelopersRepository } from '../../developers/domain/repositories/IDevelopersRepository';
import { IDeveloperProjectData } from '../domain/models/IDeveloperProjectData';
import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';

export class RemoveDeveloperFromProjectService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private developersRepository: IDevelopersRepository
  ) {}

  async execute({projectId, developerId}: IDeveloperProjectData) {
    if(!projectId) {
      throw new Error('Project ID is required');
    }

    if(!developerId) {
      throw new Error('Developer ID is required');
    }

    const projectExists = this.projectsRepository.findById(projectId);
    if(!projectExists) {
      throw new Error('This project doesn\'t exists');
    }

    const developerExists = this.developersRepository.findById(developerId);
    if(!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsInProject = this.projectsRepository.checkDeveloperInProject({projectId, developerId});
    if(!developerIsInProject) {
      throw new Error('This developer isn\'t in this project');
    }

    await this.projectsRepository.removeDeveloperFromProject({projectId, developerId});
  }
}
