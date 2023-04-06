import { Request, Response } from 'express';
import DeleteRoleService from '../../services/DeleteRoleService';

class DeleteRoleController {
  async handle(req: Request, res: Response) {
    const { id: roleId } = req.params;
    const role = await DeleteRoleService.execute(roleId);
    return res.sendStatus(204);
  }
}

export default new DeleteRoleController();
