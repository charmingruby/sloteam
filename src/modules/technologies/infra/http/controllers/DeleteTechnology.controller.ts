import { Request, Response } from 'express';
import { DeleteTechnologyService } from '../../../services/DeleteTechnology.service';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class DeleteTechnologyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const prismaRepository = new PrismaTechnologiesRepository();
    const deleteTechnology =  new DeleteTechnologyService(prismaRepository);

    try {
      await deleteTechnology.execute(id);
      const feedback = new FeedbackMessages('technology');
      const message = feedback.removed();

      return res.status(204).json({
        success: message
      });
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new DeleteTechnologyController();
