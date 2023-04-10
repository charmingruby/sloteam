import { Role } from '@prisma/client';
import { ICreateRoleData } from '../models/ICreateRoleData.model';
import { IUpdateRoleData } from '../models/IUpdateRoleData.model';
import { IDeveloperRoleData } from '../models/IDeveloperRoleData.model';

export interface IRolesRepository {
  index: () => Promise<Role[] | undefined>
  findById: (id: string) => Promise<Role | undefined>
  findByName: (name: string) => Promise<Role | undefined>
  create: (data: ICreateRoleData) => Promise<void>
  update: (data: IUpdateRoleData) => Promise<void>
  delete: (id: string) => Promise<void>
  addDeveloperToRole: (data: IDeveloperRoleData) => Promise<void>
  removeDeveloperFromRole: (data: IDeveloperRoleData) => Promise<void>
  checkDeveloperInRole: (data: IDeveloperRoleData) => Promise<Role | undefined>
}
