import { Request, Response } from 'express';
import { PrismaRolesRepository } from '../../repositories/prisma/PrismaRolesRepository';
import { RoleDetailsService } from '../../../services/RoleDetails.service';

class RoleDetailsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const prismaRepository = new PrismaRolesRepository();
    const roleDetails = new RoleDetailsService(prismaRepository);

    try {
      const role = await roleDetails.execute(id);

      return res.json(role);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new RoleDetailsController();
