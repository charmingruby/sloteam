import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { PrismaDevelopersRepository } from '../../../../developers/infra/repositories/prisma/PrismaDevelopersRepository';
import { AddDeveloperToProjectService } from '../../../services/AddDeveloperToProject.service';

class AddTechnologyToProjectController {
  async handle(req: Request, res: Response) {
    const {id: projectId} = req.params;
    const {developerId} = req.body;

    const prismaProjectsRepository = new PrismaProjectsRepository();
    const prismaDevelopersRepository = new PrismaDevelopersRepository();
    const addTechnologyToProject = new AddDeveloperToProjectService(prismaProjectsRepository, prismaDevelopersRepository);

    try {
      await addTechnologyToProject.execute({projectId, developerId});

      return res.status(201).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new AddTechnologyToProjectController();
