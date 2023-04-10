import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { UpdateProjectStatusService } from '../../../services/UpdateProjectStatus.service';

class UpdateProjectStatus {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { development } = req.body;

    const prismaRepository = new PrismaProjectsRepository();
    const updateProjectStatus = new UpdateProjectStatusService(prismaRepository);

    try {
      await updateProjectStatus.execute({
        id, development
      });
      return res.status(202).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new UpdateProjectStatus();
