import { Request, Response } from 'express';
import { CreateProjectService } from '../../../services/CreateProject.service';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class CreateProjectController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    }

    const { name, description } = req.body;
    const icon = req.file.filename;

    const prismaProjectsRepository = new PrismaProjectsRepository();
    const createProject = new CreateProjectService(prismaProjectsRepository);

    try {
      await createProject.execute({ name, description, icon });
      const feedback = new FeedbackMessages('project');
      const message = feedback.added();

      return res.status(201).json({
        success: message
      });
    }catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }

  }
}

export default new CreateProjectController();
