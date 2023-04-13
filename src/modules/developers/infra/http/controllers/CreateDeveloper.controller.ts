import { Request, Response } from 'express';
import { CreateDeveloperService } from '../../../services/CreateDeveloper.service';
import { PrismaDevelopersRepository } from '../../repositories/prisma/PrismaDevelopersRepository';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class CreateDeveloperController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    }

    const { name, last_name, email } = req.body;
    const age = parseInt(req.body.age);
    const icon = req.file.filename;

    const prismaRepository = new PrismaDevelopersRepository();
    const createDeveloper = new CreateDeveloperService(prismaRepository);

    try {
      await createDeveloper.execute({ name, last_name, age, icon, email });
      const feedback = new FeedbackMessages('developer');
      const message = feedback.added();

      return res.status(201).json({
        success: message
      });
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new CreateDeveloperController();
