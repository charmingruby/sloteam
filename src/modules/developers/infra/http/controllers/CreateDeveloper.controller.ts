import { Request, Response } from 'express';
import { CreateDeveloperService } from '../../../services/CreateDeveloper.service';
import { PrismaDevelopersRepository } from '../../repositories/prisma/PrismaDevelopersRepository';

class CreateDeveloperController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    }

    const { name, last_name, email } = req.body;
    const age = parseInt(req.body.age);
    const icon = req.file.filename;

    const prismaRepository = new PrismaDevelopersRepository();
    const createDeveloper = new CreateDeveloperService(prismaRepository);

    try {
      await createDeveloper.execute({ name, last_name, age, icon, email });

      return res.status(201).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new CreateDeveloperController();
