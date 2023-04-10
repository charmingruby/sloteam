import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';

export class ListProjectsService {
  constructor(
    private projectsRepository: IProjectsRepository
  )
  {}

  async execute() {
    const listProjects = await this.projectsRepository.index();

    return listProjects;
  }
}
