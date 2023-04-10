import { Request, Response } from 'express';
import { PrismaDevelopersRepository } from '../../repositories/prisma/PrismaDevelopersRepository';
import { DeleteDeveloperService } from '../../../services/DeleteDeveloper.service';

class DeleteDeveloperController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const prismaRepository =  new PrismaDevelopersRepository();
    const deleteDeveloper = new DeleteDeveloperService(prismaRepository);

    try {
      await deleteDeveloper.execute(id);

      return res.status(204).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new DeleteDeveloperController();
