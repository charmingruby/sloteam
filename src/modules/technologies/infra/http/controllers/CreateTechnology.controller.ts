import { Request, Response } from 'express';
import { CreateTechnologyService } from '../../../services/CreateTechnology.service';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class CreateTechnologyController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;

    const prismaRepository = new PrismaTechnologiesRepository();
    const createTechnology = new CreateTechnologyService(prismaRepository);

    try {
      await createTechnology.execute({name, description});
      const feedback = new FeedbackMessages('technology');
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

export default new CreateTechnologyController();
