import { Request, Response } from 'express';
import ListRolesUseCase from '../../useCases/ListRolesUseCase';

class ListRolesController {
  async handle(req: Request, res: Response) {
    const roles = await ListRolesUseCase.execute();
    return res.json(roles);
  }
}

export default new ListRolesController();
