import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { UpdateProjectStatusService } from '../../../services/UpdateProjectStatus.service';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

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
      const feedback = new FeedbackMessages('project');
      const message = feedback.updated();

      return res.status(202).json({
        success: message
      });
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new UpdateProjectStatus();
