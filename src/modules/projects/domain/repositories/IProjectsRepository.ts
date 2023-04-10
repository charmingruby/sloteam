import { Project } from '@prisma/client';
import { ICreateProjectData } from '../models/ICreateProjectData.model';
import { IUpdateProjectData } from '../models/IUpdateProjectData.model';
import { IUpdateProjectStatusData } from '../models/IUpdateProjectStatusData';

export interface IProjectsRepository {
  index(): Promise<Project[] | undefined>
  findById(id: string): Promise<Project | undefined>
  findByName(name: string): Promise <Project | undefined>
  create(data: ICreateProjectData): Promise<void>
  update(data: IUpdateProjectData): Promise<void>
  delete(id: string): Promise<void>
  updateStatus(data: IUpdateProjectStatusData): Promise<void>
}
