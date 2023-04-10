import { Request, Response } from 'express';
import { PrismaRolesRepository } from '../../repositories/prisma/PrismaRolesRepository';
import { PrismaDevelopersRepository } from '../../../../developers/infra/repositories/prisma/PrismaDevelopersRepository';
import { AddDeveloperToRoleService } from '../../../services/AddDeveloperToRole.service';

class AddDeveloperToRoleController {
  async handle(req: Request, res: Response) {
    const { id: roleId } = req.params;
    const { developerId } = req.body;

    const prismaDevelopersRepository = new PrismaDevelopersRepository();
    const prismaRolesRepository = new PrismaRolesRepository();
    const addDeveloperToRole = new AddDeveloperToRoleService(
      prismaDevelopersRepository,
      prismaRolesRepository
    );

    try {
      await addDeveloperToRole.execute({roleId, developerId});

      return res.status(201).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new AddDeveloperToRoleController();
