import { Request, Response } from 'express';
import ListRolesService from '../../services/ListRolesService';

class ListRolesController {
  async handle(req: Request, res: Response) {
    const roles = await ListRolesService.execute();
    return res.json(roles);
  }
}

export default new ListRolesController();
