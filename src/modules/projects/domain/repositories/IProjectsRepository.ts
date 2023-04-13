import { Project } from '@prisma/client';
import { ICreateProjectData } from '../models/ICreateProjectData.model';
import { IUpdateProjectData } from '../models/IUpdateProjectData.model';
import { IUpdateProjectStatusData } from '../models/IUpdateProjectStatusData';
import { ITechnologyProjectData } from '../models/ITechnologyProjectData.model';
import { IDeveloperProjectData } from '../models/IDeveloperProjectData';

export interface IProjectsRepository {
  index(): Promise<Project[] | undefined>
  findById(id: string): Promise<Project | undefined>
  findByName(name: string): Promise <Project | undefined>
  create(data: ICreateProjectData): Promise<void>
  update(data: IUpdateProjectData): Promise<void>
  delete(id: string): Promise<void>
  updateStatus(data: IUpdateProjectStatusData): Promise<void>

  addTechnologyToProject(data: ITechnologyProjectData): Promise<void>
  removeTechnologyFromProject(data: ITechnologyProjectData): Promise<void>
  checkTechnologyInProject(data: ITechnologyProjectData): Promise<Project | undefined>

  addDeveloperToProject(data: IDeveloperProjectData): Promise<void>
  removeDeveloperFromProject(data: IDeveloperProjectData): Promise<void>
  checkDeveloperInProject(data: IDeveloperProjectData): Promise<Project | undefined>
}
