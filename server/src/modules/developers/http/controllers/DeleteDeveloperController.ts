import { Request, Response } from 'express';
import DeleteDeveloperService from '../../services/DeleteDeveloperService';

class DeleteDeveloperController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const developer = await DeleteDeveloperService.execute(id);
    return res.sendStatus(204);
  }
}

export default new DeleteDeveloperController();
