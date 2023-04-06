import { Request, Response } from 'express';

import CreateTechnologyService from '../../services/CreateTechnologyService';

class CreateTechnologyController {
  async handle(req: Request, res: Response) {
    const { name, areas, description } = req.body;

    const technology = await CreateTechnologyService.execute({ name, description });

    return res.json(technology);
  }
}

export default new CreateTechnologyController();
