import { Request, Response } from 'express';

import CreateTechnologyUseCase from '../../useCases/CreateTechnologyUseCase';

class CreateTechnologyController {
  async handle(req: Request, res: Response) {
    const { name, areas, description } = req.body;

    const technology = await CreateTechnologyUseCase.execute({ name, areas, description });

    return res.json(technology);
  }
}

export default new CreateTechnologyController();
