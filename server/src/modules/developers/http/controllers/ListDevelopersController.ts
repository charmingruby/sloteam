import { Request, Response } from 'express';
import ListDevelopersUseCase from '../../useCases/ListDevelopersUseCase';

class ListDevelopersController {
  async handle(req: Request, res: Response) {
    const developers = await ListDevelopersUseCase.execute();
    return res.json(developers);
  }
}

export default new ListDevelopersController();
