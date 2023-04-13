import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { PrismaDevelopersRepository } from '../../../../developers/infra/repositories/prisma/PrismaDevelopersRepository';
import { RemoveDeveloperFromProjectService } from '../../../services/RemoveDeveloperFromProject.service';

class RemoveTechnologyFromProjectController {
  async handle(req: Request, res: Response) {
    const {id: projectId} = req.params;
    const {developerId} = req.body;

    const prismaProjectsRepository = new PrismaProjectsRepository();
    const prismaDevelopersRepository = new PrismaDevelopersRepository();
    const removeDeveloperFromProject =  new RemoveDeveloperFromProjectService(prismaProjectsRepository, prismaDevelopersRepository);

    try {
      await removeDeveloperFromProject.execute({projectId, developerId});

      return res.status(204).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new RemoveTechnologyFromProjectController();
