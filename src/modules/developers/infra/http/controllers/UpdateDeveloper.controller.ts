import { Request, Response } from 'express';
import { PrismaDevelopersRepository } from '../../repositories/prisma/PrismaDevelopersRepository';
import { UpdateDeveloperService } from '../../../services/UpdateDeveloper.service';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class UpdateDeveloperController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, last_name, age, email } = req.body;
    const icon = req.file?.filename;

    const prismaRepository = new PrismaDevelopersRepository();
    const updateDeveloper = new UpdateDeveloperService(prismaRepository);

    try {
      await updateDeveloper.execute({id, name, last_name, age, email, icon});
      const feedback = new FeedbackMessages('developer');
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

export default new UpdateDeveloperController();
