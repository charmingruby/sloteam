import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';

export class DeleteProjectService {
  constructor(
    private projectsRepository: IProjectsRepository
  ) {}

  async execute(id: string) {
    const projectExists = await this.projectsRepository.findById(id);

    if(!projectExists) {
      throw new Error('This project doesn\'t exists');
    }

    await this.projectsRepository.delete(id);
  }
}
