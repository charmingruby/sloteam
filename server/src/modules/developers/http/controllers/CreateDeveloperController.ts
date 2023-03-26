import { Request, Response } from 'express';
import CreateDeveloperUseCase from '../../useCases/CreateDeveloperUseCase';

class CreateDeveloperController {
  async handle(req: Request, res: Response) {
    if (!req.file) {

    } else {
      const { name, lastName, age, iconPath, email } = req.body;
      console.log({ name, lastName, age, iconPath, email });
      const developer = await CreateDeveloperUseCase.execute({ name, lastName, age, iconPath, email });
      return res.json(developer);
    }
  }

}

export default new CreateDeveloperController();
