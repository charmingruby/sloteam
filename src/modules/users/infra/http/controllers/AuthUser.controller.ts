import { Request, Response } from 'express';
import { AuthUserService } from '../../../services/AuthUser.service';
import { PrismaUsersRepository } from '../../repositories/prisma/PrismaUsersRepository';

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const prismaRepository = new PrismaUsersRepository();
    const authUser = new AuthUserService(prismaRepository);

    try {
      const user = await authUser.execute({ email, password });

      return res.status(200).json(user);
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new AuthUserController();
