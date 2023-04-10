import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';

export class ProjectDetailsService {
  constructor(
    private projectsRepository: IProjectsRepository
  ) {}

  async execute(id: string) {
    const project = await this.projectsRepository.findById(id);

    if(project) {
      throw new Error('This project doesn\'t exists');
    }

    return project;
  }
}
