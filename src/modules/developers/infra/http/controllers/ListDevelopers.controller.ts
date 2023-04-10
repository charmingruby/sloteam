import { Request, Response } from 'express';
import { PrismaDevelopersRepository } from '../../repositories/prisma/PrismaDevelopersRepository';
import { ListDevelopersService } from '../../../services/ListDevelopers.service';

class ListDevelopersController {
  async handle(req: Request, res: Response) {
    const prismaRepository = new PrismaDevelopersRepository();
    const listDevelopers = new ListDevelopersService(prismaRepository);

    try {
      const developers = await listDevelopers.execute();

      return res.status(200).json(developers);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new ListDevelopersController();
