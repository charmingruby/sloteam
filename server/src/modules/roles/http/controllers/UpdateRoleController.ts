import { Request, Response } from 'express';
import UpdateRoleUseCase from '../../useCases/UpdateRoleUseCase';

class UpdateRoleController {
  async handle(req: Request, res: Response) {
    const { roleId } = req.params;
    const { name } = req.body;
    const role = await UpdateRoleUseCase.execute({ name, roleId });
    return res.json(role);
  }
}

export default new UpdateRoleController();
