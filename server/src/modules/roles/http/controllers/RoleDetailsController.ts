import { Request, Response } from 'express';
import RoleDetailsUseCase from '../../useCases/RoleDetailsUseCase';

class RoleDetailsController {
  async handle(req: Request, res: Response) {
    const { roleId } = req.params;
    const role = await RoleDetailsUseCase.execute(roleId);
    return res.json(role);
  }
}

export default new RoleDetailsController();
