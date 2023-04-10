import { Request, Response } from 'express';
import { PrismaRolesRepository } from '../../repositories/prisma/PrismaRolesRepository';
import { ListRolesService } from '../../../services/ListRoles.service';

class ListRolesController {
  async handle(req: Request, res: Response) {
    const prismaRepository = new PrismaRolesRepository();
    const listRoles = new ListRolesService(prismaRepository);

    try {
      const roles = await listRoles.execute();

      return res.status(200).json(roles);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new ListRolesController();
