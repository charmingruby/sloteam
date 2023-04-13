import { Request, Response } from 'express';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { UpdateProjectService } from '../../../services/UpdateProject.service';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class UpdateProjectController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    }

    const { id } = req.params;
    const { description } = req.body;
    const icon = req.file.filename;

    const prismaRepository = new PrismaProjectsRepository();
    const updateProject = new UpdateProjectService(prismaRepository);

    try {
      await updateProject.execute({
        id, description, icon
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

export default new UpdateProjectController();
