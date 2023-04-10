import { Request, Response } from 'express';
import { DeleteTechnologyService } from '../../../services/DeleteTechnologyService';
import { PrismaTechnologiesRepository } from '../../repositories/prisma/PrismaTechnologiesRepository';

class DeleteTechnologyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const prismaRepository = new PrismaTechnologiesRepository();
    const deleteTechnology =  new DeleteTechnologyService(prismaRepository);

    try {
      await deleteTechnology.execute(id);

      return res.status(204).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new DeleteTechnologyController();
