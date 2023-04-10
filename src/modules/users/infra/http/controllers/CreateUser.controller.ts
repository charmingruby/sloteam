import { Request, Response } from 'express';
import { CreateUserService } from '../../../services/CreateUser.service';
import { PrismaUsersRepository } from '../../repositories/prisma/PrismaUsersRepository';

class CreateUserController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    }

    const { name, email, password } = req.body;
    const icon = req.file.filename;

    const prismaRepository = new PrismaUsersRepository();
    const createUser = new CreateUserService(prismaRepository);

    try {
      await createUser.execute({ name, email, password, icon });

      return res.status(201).send();
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new CreateUserController();
