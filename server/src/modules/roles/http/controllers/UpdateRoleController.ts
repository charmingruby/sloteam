import { Request, Response } from 'express';
import UpdateRoleService from '../../services/UpdateRoleService';

class UpdateRoleController {
  async handle(req: Request, res: Response) {
    const { id: roleId } = req.params;
    const { name } = req.body;
    const role = await UpdateRoleService.execute({ name, roleId });
    return res.json(role);
  }
}

export default new UpdateRoleController();
