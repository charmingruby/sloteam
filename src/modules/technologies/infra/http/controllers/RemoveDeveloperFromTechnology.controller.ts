import { Request, Response } from 'express';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';
import { PrismaDevelopersRepository } from '../../../../developers/infra/repositories/prisma/PrismaDevelopersRepository';
import { AddDeveloperToTechnologyService } from '../../../services/AddDeveloperToTechnology.service';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class RemoveDeveloperFromTechnologyController {
  async handle(req: Request, res: Response) {
    const { id: technologyId } = req.params;
    const { developerId } = req.body;

    const prismaTechnologiesRepository = new PrismaTechnologiesRepository();
    const prismaDevelopersRepository = new PrismaDevelopersRepository();
    const removeDeveloperFromTechnology = new AddDeveloperToTechnologyService(prismaTechnologiesRepository, prismaDevelopersRepository);

    try {
      await removeDeveloperFromTechnology.execute({technologyId, developerId});
      const feedback = new FeedbackMessages('technology', 'developer');
      const message = feedback.unreferenced();

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

export default new RemoveDeveloperFromTechnologyController();
