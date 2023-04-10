import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { ListProjectsService } from '../../../services/ListProjects.service';

class CreateProjectController {
  async handle(req: Request, res: Response) {
    const prismaRepository = new PrismaProjectsRepository();
    const listProjects = new ListProjectsService(prismaRepository);

    try {
      const projects = await listProjects.execute();

      return res.status(200).json(projects);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new CreateProjectController();
