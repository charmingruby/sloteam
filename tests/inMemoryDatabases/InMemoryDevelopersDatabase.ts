import { Developer } from '@prisma/client';
import { ICreateDeveloperData } from '../../src/modules/developers/domain/models/ICreateDeveloperData.model';
import { IUpdateDeveloperData } from '../../src/modules/developers/domain/models/IUpdateDeveloperData.model';
import { IDevelopersRepository } from '../../src/modules/developers/domain/repositories/IDevelopersRepository';

import { Developer as DeveloperEntity } from '../../src/modules/developers/domain/entities/Developer';

const testingDeveloper = new DeveloperEntity({
  name:'Gustavo',
  last_name: 'Dias',
  age: 19,
  email: 'gustavo@email.com',
  icon: 'icon.png'
});

const developers: DeveloperEntity[] = [ testingDeveloper ];

export class InMemoryDevelopersDatabase implements IDevelopersRepository {
  async index(): Promise<Developer[]> {
    return await developers;
  }
  findById: (id: string) => Promise<Developer>;
  findByEmail: (email: string) => Promise<Developer>;
  create: (data: ICreateDeveloperData) => Promise<void>;
  update: (data: IUpdateDeveloperData) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
