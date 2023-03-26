import { Request, Response } from 'express';
import DeleteRoleUseCase from '../../useCases/DeleteRoleUseCase';

class DeleteRoleController {
  async handle(req: Request, res: Response) {
    const { roleId } = req.params;
    const role = await DeleteRoleUseCase.execute(roleId);
    return res.sendStatus(204);
  }
}

export default new DeleteRoleController();
