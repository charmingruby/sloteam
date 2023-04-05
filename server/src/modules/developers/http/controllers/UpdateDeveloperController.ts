import { Request, Response } from 'express';
import UpdateDeveloperService from '../../services/UpdateDeveloperService';

class UpdateDeveloperController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const iconPath = req.file.filename;
    const { name, lastName, age, email } = req.body;
    const developer = await UpdateDeveloperService.execute({ id, name, lastName, age, iconPath, email });
    return res.json(developer);
  }
}

export default new UpdateDeveloperController();
