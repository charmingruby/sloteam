import { Request, Response } from 'express';
import { PrismaRolesRepository } from '../../repositories/prisma/PrismaRolesRepository';
import { CreateRoleService } from '../../../services/CreateRole.service';
import { FeedbackMessages } from '../../../../../shared/utils/feedbackMessages';

class CreateRoleController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const prismaRepository = new PrismaRolesRepository();
    const createRole = new CreateRoleService(prismaRepository);

    try {
      await createRole.execute({ name });
      const feedback = new FeedbackMessages('role');
      const message = feedback.added();

      return res.status(201).json({
        success: message
      });
    } catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}

export default new CreateRoleController();
