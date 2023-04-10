import { Request, Response } from 'express';
import { PrismaRolesRepository } from '../../repositories/prisma/PrismaRolesRepository';
import { CreateRoleService } from '../../../services/CreateRole.service';

class CreateRoleController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const prismaRepository = new PrismaRolesRepository();
    const createRole = new CreateRoleService(prismaRepository);

    try {
      await createRole.execute({ name });

      return res.status(201).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new CreateRoleController();
