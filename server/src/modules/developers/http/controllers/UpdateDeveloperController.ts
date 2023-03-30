import { Request, Response } from 'express';
import UpdateDeveloperUseCase from '../../useCases/UpdateDeveloperUseCase';

class UpdateDeveloperController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const iconPath = req.file.filename;
    const { name, lastName, age, email } = req.body;
    const developer = await UpdateDeveloperUseCase.execute({ id, name, lastName, age, iconPath, email });
    return res.json(developer);
  }
}

export default new UpdateDeveloperController();
