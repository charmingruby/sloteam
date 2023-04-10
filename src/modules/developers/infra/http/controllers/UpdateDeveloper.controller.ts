import { Request, Response } from 'express';
import { PrismaDevelopersRepository } from '../../repositories/prisma/PrismaDevelopersRepository';
import { UpdateDeveloperService } from '../../../services/UpdateDeveloper.service';

class UpdateDeveloperController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    }

    const { id } = req.params;
    const { name, last_name, age, email } = req.body;
    const icon = req.file.filename;

    const prismaRepository = new PrismaDevelopersRepository();
    const updateDeveloper = new UpdateDeveloperService(prismaRepository);

    try {
      await updateDeveloper.execute({id, name, last_name, age, email, icon});

      return res.status(202).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new UpdateDeveloperController();
