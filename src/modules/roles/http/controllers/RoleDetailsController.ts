import { Request, Response } from 'express';
import RoleDetailsService from '../../services/RoleDetailsService';

class RoleDetailsController {
  async handle(req: Request, res: Response) {
    const { id: roleId } = req.params;
    const role = await RoleDetailsService.execute(roleId);
    return res.json(role);
  }
}

export default new RoleDetailsController();
