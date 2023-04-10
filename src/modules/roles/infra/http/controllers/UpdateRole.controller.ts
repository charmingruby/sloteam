import { Request, Response } from 'express';
import { PrismaRolesRepository } from '../../repositories/prisma/PrismaRolesRepository';
import { UpdateRoleService } from '../../../services/UpdateRole.service';

class UpdateRoleController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const prismaRepository = new PrismaRolesRepository();
    const updateRole = new UpdateRoleService(prismaRepository);

    try {
      await updateRole.execute({ name, id });

      return res.status(202).send();

    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new UpdateRoleController();
