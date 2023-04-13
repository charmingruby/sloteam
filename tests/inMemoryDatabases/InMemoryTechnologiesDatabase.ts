import { Technology } from '@prisma/client';
import { ICreateTechnologyData } from '../../src/modules/technologies/domain/models/ICreateTechnologyData';
import { IDeveloperTechnologyData } from '../../src/modules/technologies/domain/models/IDeveloperTechnologyData.model';
import { IUpdateTechnologyData } from '../../src/modules/technologies/domain/models/IUpdateTechnologyData.model';
import { ITechnologiesRepository } from '../../src/modules/technologies/domain/repositories/ITechnologiesRepository';

export class InMemoryTechnologiesDatabase implements ITechnologiesRepository {
  index: () => Promise<Technology[]>;
  findById: (id: string) => Promise<Technology>;
  findByName: (name: string) => Promise<Technology>;
  create: (data: ICreateTechnologyData) => Promise<void>;
  update: (data: IUpdateTechnologyData) => Promise<void>;
  delete: (id: string) => Promise<void>;
  addDeveloperToTechnology: (data: IDeveloperTechnologyData) => Promise<void>;
  removeDeveloperFromTechnology: (data: IDeveloperTechnologyData) => Promise<void>;
  checkDeveloperInTechnology: (data: IDeveloperTechnologyData) => Promise<IDeveloperTechnologyData>;

}
