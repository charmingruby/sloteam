import { Request, Response } from 'express';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';
import { ListTechnologiesService } from '../../../services/ListTechnologiesService';

class ListTechnologiesController {
  async handle(req: Request, res: Response) {
    const prismaRepository = new PrismaTechnologiesRepository();
    const listTechnologies = new ListTechnologiesService(prismaRepository);

    try {
      const technologies = listTechnologies.execute();

      return res.status(200).json(technologies);
    } catch(err) {
      return res.status(400).json({
        error: err.status
      });
    }
  }
}

export default new ListTechnologiesController();
