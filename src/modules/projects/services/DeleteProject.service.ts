import { IProjectsRepository } from '../domain/repositories/IProjectsRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class DeleteProjectService {
  constructor(
    private projectsRepository: IProjectsRepository
  ) {}

  async execute(id: string) {
    const projectExists = await this.projectsRepository.findById(id);

    if(!projectExists) {
      throw new Error('This project doesn\'t exists');
    }

    invalidateRedis('sloteam-PROJECTS_LIST');

    await this.projectsRepository.delete(id);
  }
}
