import { Request, Response } from 'express';
import UpdateTechnologyService from '../../services/UpdateTechnologyService';

class UpdateTechnologyController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;
    const technology = await UpdateTechnologyService.execute({ id, name, description });
    return res.json(technology);
  }
}

export default new UpdateTechnologyController();
