import { Technology } from '@prisma/client';
import { IDeveloperTechnologyData } from '../models/IDeveloperTechnologyData.model';
import { IUpdateTechnologyData } from '../models/IUpdateTechnologyData.model';
import { ICreateTechnologyData } from '../models/ICreateTechnologyData';

export interface ITechnologiesRepository {
  index: () => Promise<Technology[] | undefined>
  findById: (id: string) => Promise<Technology | undefined>
  findByName: (name: string) => Promise<Technology | undefined>
  create: (data: ICreateTechnologyData) => Promise<void>
  update: (data: IUpdateTechnologyData) => Promise<void>
  delete: (id: string) => Promise<void>
  addDeveloperToTechnology: (data: IDeveloperTechnologyData) => Promise<void>
  removeDeveloperFromTechnology: (data: IDeveloperTechnologyData) => Promise<void>
  checkDeveloperInTechnology: (data: IDeveloperTechnologyData) => Promise<Technology | null>
}
