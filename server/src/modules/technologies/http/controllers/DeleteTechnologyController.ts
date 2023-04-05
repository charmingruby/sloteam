import { Request, Response } from 'express';
import DeleteTechnologyService from '../../services/DeleteTechnologyService';

class DeleteTechnologyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const technology = await DeleteTechnologyService.execute(id);
    return res.sendStatus(204);
  }
}

export default new DeleteTechnologyController();
