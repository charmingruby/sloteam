import { Request, Response } from 'express';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';
import { UpdateTechnologyService } from '../../../services/UpdateTechnologyService';

class UpdateTechnologyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;

    const prismaRepository = new PrismaTechnologiesRepository();
    const updateTechnology = new UpdateTechnologyService(prismaRepository);

    try {
      await updateTechnology.execute({ id, name, description });

      return res.status(202).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }


  }
}

export default new UpdateTechnologyController();
