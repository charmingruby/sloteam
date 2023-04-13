import { Request, Response } from 'express';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';
import { TechnologyDetailsService } from '../../../services/TechnologyDetails.service';

class TechnologyDetailsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const prismaRepository = new PrismaTechnologiesRepository();
    const technologyDetails = new TechnologyDetailsService(prismaRepository);

    try {
      const technology = await technologyDetails.execute(id);

      return res.status(200).json(technology);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new TechnologyDetailsController();
