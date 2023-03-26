import { Request, Response } from 'express';
import CreateRoleUseCase from '../../useCases/CreateRoleUseCase';

class CreateRoleController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const role = await CreateRoleUseCase.execute({ name });
    return res.json(role);
  }
}

export default new CreateRoleController();
