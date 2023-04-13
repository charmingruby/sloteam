import { IDevelopersRepository } from '../../developers/domain/repositories/IDevelopersRepository';
import { IDeveloperProjectData } from '../domain/models/IDeveloperProjectData';
import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';

export class AddDeveloperToProjectService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private developersRepository: IDevelopersRepository
  ) {}

  async execute({developerId, projectId}: IDeveloperProjectData) {
    if(!developerId) {
      throw new Error('Developer ID is required');
    }

    if(!projectId) {
      throw new Error('Project ID is required');
    }

    const projectExists = await this.projectsRepository.findById(projectId);
    if(!projectExists) {
      throw new Error('This project doesn\'t exists');

    }

    const developerExists = await this.developersRepository.findById(developerId);
    if(!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    const developerIsAlreadyInProject = await this.projectsRepository.checkDeveloperInProject({projectId, developerId});
    if(developerIsAlreadyInProject) {
      throw new Error('This developer is already in this project');
    }

    await this.projectsRepository.addDeveloperToProject({projectId, developerId});
  }
}
