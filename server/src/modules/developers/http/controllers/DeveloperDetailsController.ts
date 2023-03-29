import { Request, Response } from 'express';
import DeveloperDetailsUseCase from '../../useCases/DeveloperDetailsUseCase';

class DeveloperDetailsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const developer = await DeveloperDetailsUseCase.execute(id);

    return res.json(developer);
  }
}

export default new DeveloperDetailsController();
