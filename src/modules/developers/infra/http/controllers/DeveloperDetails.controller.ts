import { Request, Response } from 'express';
import { PrismaDevelopersRepository } from '../../repositories/prisma/PrismaDevelopersRepository';
import { DeveloperDetailsService } from '../../../services/DeveloperDetails.service';

class DeveloperDetailsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const prismaRepository = new PrismaDevelopersRepository();
    const developerDetails = new DeveloperDetailsService(prismaRepository);

    try {
      const developer = await developerDetails.execute(id);

      return res.status(200).json(developer);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new DeveloperDetailsController();
