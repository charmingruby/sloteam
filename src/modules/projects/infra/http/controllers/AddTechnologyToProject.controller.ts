import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { PrismaTechnologiesRepository } from '../../../../technologies/infra/repositories/prisma/PrismaTechnologiesRepository';
import { AddTechnologyToProjectService } from '../../../services/AddTechnologyToProject.service';

class AddTechnologyToProjectController {
  async handle(req: Request, res: Response) {
    const {id: projectId} = req.params;
    const {technologyId} = req.body;

    const prismaProjectsRepository = new PrismaProjectsRepository();
    const prismaTechnologiesRepository = new PrismaTechnologiesRepository();
    const addTechnologyToProject = new AddTechnologyToProjectService(prismaProjectsRepository, prismaTechnologiesRepository);

    try {
      await addTechnologyToProject.execute({projectId, technologyId});

      return res.status(201).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new AddTechnologyToProjectController();
