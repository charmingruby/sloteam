import { Request, Response } from 'express';
import CreateDeveloperUseCase from '../../useCases/CreateDeveloperUseCase';

class CreateDeveloperController {
  async handle(req: Request, res: Response) {
    if (!req.file) {
      throw new Error('Image upload error');
    } else {
      const { name, lastName, email } = req.body;
      const iconPath = req.file.filename;
      const age = parseInt(req.body.age);
      const developer = await CreateDeveloperUseCase.execute({ name, lastName, age, iconPath, email });
      return res.json(developer);
    }
  }

}

export default new CreateDeveloperController();
