import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { ProjectDetailsService } from '../../../services/ProjectDetails.service';

class ProjectDetailsController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;

    const prismaRepository = new PrismaProjectsRepository();
    const projectDetails = new ProjectDetailsService(prismaRepository);

    try {
      const project = await projectDetails.execute(id);

      return res.status(200).json(
        project
      );
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new ProjectDetailsController();
