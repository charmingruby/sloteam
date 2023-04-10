import { Request, Response } from 'express';
import { CreateProjectService } from '../../../services/CreateProject.service';
import { PrismaProjectsRepository } from '../../repositories/prisma/PrismaProjectsRepository';

class CreateProjectController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    }

    const { name, description } = req.body;
    const icon = req.file.filename;

    const prismaProjectsRepository = new PrismaProjectsRepository();
    const createProject = new CreateProjectService(prismaProjectsRepository);

    try {
      await createProject.execute({ name, description, icon });
      return res.status(201).send();
    }  catch(err) {
      return res.status(400).json({
        error: err.message
      });
    }

  }
}

export default new CreateProjectController();
