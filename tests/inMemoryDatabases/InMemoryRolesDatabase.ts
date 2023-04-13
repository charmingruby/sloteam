import { Role } from '@prisma/client';
import { ICreateRoleData } from '../../src/modules/roles/domain/models/ICreateRoleData.model';
import { IDeveloperRoleData } from '../../src/modules/roles/domain/models/IDeveloperRoleData.model';
import { IUpdateRoleData } from '../../src/modules/roles/domain/models/IUpdateRoleData.model';
import { IRolesRepository } from '../../src/modules/roles/domain/repositories/IRolesRepository';

export class InMemoryRolesDatabase implements IRolesRepository {
  index: () => Promise<Role[]>;
  findById: (id: string) => Promise<Role>;
  findByName: (name: string) => Promise<Role>;
  create: (data: ICreateRoleData) => Promise<void>;
  update: (data: IUpdateRoleData) => Promise<void>;
  delete: (id: string) => Promise<void>;
  addDeveloperToRole: (data: IDeveloperRoleData) => Promise<void>;
  removeDeveloperFromRole: (data: IDeveloperRoleData) => Promise<void>;
  checkDeveloperInRole: (data: IDeveloperRoleData) => Promise<Role>;

}
