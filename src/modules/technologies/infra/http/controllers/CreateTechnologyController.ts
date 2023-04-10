import { Request, Response } from 'express';
import { CreateTechnologyService } from '../../../services/CreateTechnologyService';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';

class CreateTechnologyController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;

    const prismaRepository = new PrismaTechnologiesRepository();
    const createTechnology = new CreateTechnologyService(prismaRepository);

    try {
      await createTechnology.execute({name, description});

      return res.status(201).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new CreateTechnologyController();
