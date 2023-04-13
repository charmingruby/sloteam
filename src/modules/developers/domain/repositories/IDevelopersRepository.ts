import { Developer } from '@prisma/client';
import { ICreateDeveloperData } from '../models/ICreateDeveloperData.model';
import { IUpdateDeveloperData } from '../models/IUpdateDeveloperData.model';

export interface IDevelopersRepository {
  index: () => Promise<Developer[] | undefined>
  findById: (id: string) => Promise<Developer | undefined>
  findByEmail: (email: string) => Promise<Developer | undefined>
  create: (data: ICreateDeveloperData) => Promise<Developer | undefined>
  update: (data: IUpdateDeveloperData) => Promise<void>
  delete: (id: string) => Promise<void>
}
