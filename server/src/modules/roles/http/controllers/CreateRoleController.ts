import { Request, Response } from 'express';
import CreateRoleService from '../../services/CreateRoleService';

class CreateRoleController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const role = await CreateRoleService.execute({ name });
    return res.json(role);
  }
}

export default new CreateRoleController();
