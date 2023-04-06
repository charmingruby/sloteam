import { Request, Response } from 'express';
import ListDevelopersService from '../../services/ListDevelopersService';

class ListDevelopersController {
  async handle(req: Request, res: Response) {
    const developers = await ListDevelopersService.execute();
    return res.json(developers);
  }
}

export default new ListDevelopersController();
