import { Project } from '@prisma/client';
import { IProjectsRepository } from '../../src/modules/projects/domain/repositories/IProjectsRepository';
import { Project as ProjectEntity } from '../../src/modules/projects/domain/entities/Project';
import { ICreateProjectData } from '../../src/modules/projects/domain/models/ICreateProjectData.model';
import { IUpdateProjectData } from '../../src/modules/projects/domain/models/IUpdateProjectData.model';
import { IUpdateProjectStatusData } from '../../src/modules/projects/domain/models/IUpdateProjectStatusData';

export class InMemoryProjectsDatabase implements IProjectsRepository {
  update(data: IUpdateProjectData): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateStatus(data: IUpdateProjectStatusData): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public projects: ProjectEntity[] = [];

  index(): Promise<Project[]> {
    throw new Error('Method not implemented.');
  }
  async findByName(name: string): Promise<Project | undefined> {
    const response = this.projects.find((project) => (
      project.name === name
    ));
    return response;
  }

  async findById(id: string): Promise<Project | undefined> {
    const response = this.projects.find((project) => (
      project.id === id
    ));
    return response;
  }

  async create(data: ICreateProjectData) {
    const project = new ProjectEntity(data);

    this.projects.push(project);
  }
}
