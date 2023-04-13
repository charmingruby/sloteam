import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { DeleteProjectService } from '../../../services/DeleteProject.service';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class DeleteProjectController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const prismaRepository = new PrismaProjectsRepository();
    const deleteProject = new DeleteProjectService(prismaRepository);

    try {
      await deleteProject.execute(id);
      const feedback = new FeedbackMessages('project');
      const message = feedback.removed();

      return res.status(204).json({
        success: message
      });
    } catch(err) {
      return res.status(400).json({
        error:  err.message
      });
    }
  }
}

export default new DeleteProjectController();
